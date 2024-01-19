import './appear.scss'

const appear = {
    mounted(el: HTMLElement, binding, vnode, prevVnode) {
        el.classList.add('appear')
        el.classList.add('is-appear-hidden')

        const onScroll = () => {
            const rect = el.getBoundingClientRect()
            const screenCenter = window.innerHeight * .5
            const appearThreshold = .25
            const distanceToScreenCenter = Math.min(Math.abs(screenCenter - rect.top), Math.abs(screenCenter - rect.bottom)) / window.innerHeight

            const inView = (
                rect.width > 0 &&
                rect.height > 0 &&
                (rect.top < screenCenter && rect.bottom > screenCenter) || distanceToScreenCenter < appearThreshold
            )

            if (inView) {
                el.classList.remove('is-appear-hidden')
                el.classList.add('is-appear-visible')
                window.removeEventListener('scroll', onScroll)
            }
        }

        window.addEventListener('scroll', onScroll)
        onScroll()
    },
}

export default appear