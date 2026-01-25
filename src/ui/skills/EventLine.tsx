"use client"
import React, { useState, useEffect } from "react"
import { useWindowSize } from "@/service/hooks"

export default function EventLine({
  isFirst,
  isLast,
  id,
}: {
  isFirst: boolean
  isLast: boolean
  id: string
}) {
  const windowSize = useWindowSize()
  const [elementHeight, setElementHeight] = useState<number | null>(null)
  useEffect(() => {
    const el = document.getElementById(id)
    if (el) {
      setElementHeight(el.clientHeight / 2 / 16 || null)
    }
  }, [windowSize, id])
  return (
    <div className="flex flex-col justify-center items-center w-20 gap-2">
      {!isFirst ? (
        <div
          className="w-1 bg-stone-900 dark:bg-stone-100 rounded-b"
          style={{ height: `${elementHeight}rem` }}
        />
      ) : (
        <div className="w-1" style={{ height: `${elementHeight}rem` }} />
      )}
      <div className="rounded-[50%] border-2 border-green-400 h-4 w-4" />
      {!isLast ? (
        <div
          className="w-1 bg-stone-900 dark:bg-stone-100 rounded-t"
          style={{ height: `${elementHeight}rem` }}
        />
      ) : (
        <div className="w-1" style={{ height: `${elementHeight}rem` }} />
      )}
    </div>
  )
}
