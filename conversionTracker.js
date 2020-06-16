function conversionTracker(buttonsClass, conversionName) {

    const conversionButtons = document.getElementsByClassName(buttonsClass)

    if (conversionButtons.length) {
        for (let i = 0; i < conversionButtons.length; i++) {
            conversionButtons[i].addEventListener("click", function () {

                // Yandex
                ym(00000000, 'reachGoal', conversionName)

                // Google
                gtag('event', conversionName, { 'event_category': conversionName })

                // Facebook
                fbq('track', 'Lead')

                // Print
                console.log('Conversion "' + conversionName + '" from "' + buttonsClass + '" sent')

            })
        }
    }

}