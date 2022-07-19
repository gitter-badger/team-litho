var setVanta = () => {
    if (window.VANTA) window.VANTA.GLOBE({
        el: "#background-vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00
    })
}
_strk.push(function () {
    setVanta()
    window.edit_page.Event.subscribe("Page.beforeNewOneFadeIn", setVanta)
})