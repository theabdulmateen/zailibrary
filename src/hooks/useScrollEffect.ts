import { useRef, useLayoutEffect } from 'react'

type Position = {
	x: number
	y: number
}

export type EffectParams = {
	prevPos: Position
	currPos: Position
}

interface UserScrollEffectParams {
	effect: ({ prevPos, currPos }: EffectParams) => void
}

const isBrowser = typeof window !== undefined

const getCurrentPosition = () => {
	if (!isBrowser) return { x: 0, y: 0 }

	return { x: window.scrollX, y: window.scrollY }
}

export const useScrollEffect = ({ effect }: UserScrollEffectParams) => {
	const position = useRef(getCurrentPosition())

	useLayoutEffect(() => {
		const handeScroll = () => {
			const currPos = getCurrentPosition()
			effect({ prevPos: position.current, currPos })
			position.current = currPos
		}
		window.addEventListener('scroll', handeScroll)

		return () => window.addEventListener('scroll', handeScroll)
	}, [])
}
