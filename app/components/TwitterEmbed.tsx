'use client'

import Script from 'next/script'
import * as React from 'react'

export const FEATURED_TWEET_ID = '2014589940269543522'

export function TwitterEmbed({ tweetId = FEATURED_TWEET_ID }: { tweetId?: string }) {
  let containerRef = React.useRef<HTMLDivElement | null>(null)
  let [isReady, setIsReady] = React.useState(false)
  let resizeObserverRef = React.useRef<ResizeObserver | null>(null)
  let resizeCleanupRef = React.useRef<(() => void) | null>(null)

  let renderTweet = React.useCallback(async () => {
    const el = containerRef.current
    if (!el) {
      return
    }

    const twttr = (window as unknown as {
      twttr?: {
        widgets?: {
          createTweet?: (...args: Array<unknown>) => Promise<unknown>
        }
      }
    }).twttr

    if (!twttr?.widgets?.createTweet) {
      return
    }

    // Prevent re-creating the iframe on re-renders.
    if (el.dataset.embedded === 'true') return
    el.dataset.embedded = 'true'

    // Reserve space to avoid layout jumps while Twitter paints.
    el.innerHTML = ''

    await twttr.widgets.createTweet(tweetId, el, {
      theme: 'dark',
      dnt: true,
      conversation: 'none',
      align: 'left',
    })

    // Twitter sometimes leaves extra vertical space because the outer wrapper
    // and the iframe don’t agree on height. We follow the iframe’s height.
    const iframe = el.querySelector<HTMLIFrameElement>(
      "iframe[id^='twitter-widget-']"
    )
    if (!iframe) {
      setIsReady(true)
      return
    }

    const syncHeight = () => {
      // Mobile Safari can be weird here; getBoundingClientRect reflects the
      // final painted size after any responsive recalculation.
      let h = Math.ceil(iframe.getBoundingClientRect().height)
      if (h > 0) el.style.height = `${h}px`
    }

    // First paint + late layout changes (images, fonts, etc.)
    requestAnimationFrame(syncHeight)
    setTimeout(syncHeight, 250)
    setTimeout(syncHeight, 800)

    // Some mobile browsers apply a second pass after viewport settle.
    let t0 = Date.now()
    let tick = () => {
      syncHeight()
      if (Date.now() - t0 < 2500) {
        requestAnimationFrame(tick)
      }
    }
    requestAnimationFrame(tick)

    resizeObserverRef.current?.disconnect()
    resizeObserverRef.current = new ResizeObserver(syncHeight)
    resizeObserverRef.current.observe(iframe)

    resizeCleanupRef.current?.()
    let onResize = () => syncHeight()
    window.addEventListener('resize', onResize)
    window.visualViewport?.addEventListener('resize', onResize)
    resizeCleanupRef.current = () => {
      window.removeEventListener('resize', onResize)
      window.visualViewport?.removeEventListener('resize', onResize)
    }

    setIsReady(true)
  }, [])

  React.useEffect(() => {
    renderTweet()
  }, [renderTweet])

  React.useEffect(() => {
    return () => resizeObserverRef.current?.disconnect()
  }, [])

  React.useEffect(() => {
    return () => resizeCleanupRef.current?.()
  }, [])

  return (
    <div className="relative">
      <div
        aria-hidden={!isReady}
        className={
          'pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-b from-white/8 via-white/4 to-transparent ' +
          'transition-opacity duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ' +
          (isReady ? 'opacity-0' : 'opacity-100')
        }
      />

      <div
        ref={containerRef}
        className={
          'overflow-hidden rounded-2xl ring-1 ring-white/10 ' +
          // Reserve a predictable space to reduce CLS while Twitter paints.
          (isReady ? '' : 'aspect-[4/5]')
        }
      />

      <Script
        src="https://platform.twitter.com/widgets.js"
        strategy="afterInteractive"
        onLoad={renderTweet}
      />
    </div>
  )
}
