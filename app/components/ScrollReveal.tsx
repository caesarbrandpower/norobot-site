'use client'

import { useEffect } from 'react'

export function ScrollReveal() {
  useEffect(() => {
    // Scroll-triggered reveal animations
    const reveals = document.querySelectorAll('.reveal')
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            revealObserver.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15 }
    )
    reveals.forEach((el) => revealObserver.observe(el))

    // Navbar dark mode when dark section is at top
    const nav = document.querySelector('.nav')
    const darkSections = document.querySelectorAll('[data-dark]')

    const navObserver = new IntersectionObserver(
      (entries) => {
        // Check if any dark section is intersecting at the top of viewport
        let anyDarkVisible = false
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rect = entry.boundingClientRect
            // Dark section top is near or above the navbar
            if (rect.top <= 80) {
              anyDarkVisible = true
            }
          }
        })
        nav?.classList.toggle('is-dark', anyDarkVisible)
      },
      {
        // Trigger when dark section reaches the top (navbar area)
        rootMargin: '0px 0px -90% 0px',
        threshold: 0,
      }
    )
    darkSections.forEach((el) => navObserver.observe(el))

    // Also listen to scroll for more precise navbar detection
    function handleScroll() {
      if (!nav || darkSections.length === 0) return
      const navBottom = nav.getBoundingClientRect().bottom
      let isDark = false
      darkSections.forEach((section) => {
        const rect = section.getBoundingClientRect()
        if (rect.top <= navBottom && rect.bottom > navBottom) {
          isDark = true
        }
      })
      nav.classList.toggle('is-dark', isDark)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()

    return () => {
      revealObserver.disconnect()
      navObserver.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return null
}
