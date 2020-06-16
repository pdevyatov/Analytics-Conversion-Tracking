# Analytics-Conversion-Tracking
Simple all In One Google Ads/Analytics, Yandex Direct/Mertrika, Facebook Ads Pixel tracker

# How to use

1. Put the "conversionTracker.js" in yor site folder.

2. Add some class to any buttons, links, or items on the page. For example:
```html
    <button class="firstButton">
      First Button
    </button>

    <button class="secondButton">
      Second Button
    </button>
```

3. For all classes that you added, you need to call function ConversionTracker() each time. The first parameter of the function is the button class, the second parameter is the name of the conversion.

4. Add this code before ```</body>``` tag
```html
    <script src="./conversionTracker.js"></script>
    <script>
      conversionTracker('firstButton', 'nameOfConversion')
      conversionTracker('secondButton', 'nameOfConversion2')
    </script>
```

5. In 'conversionTracker.js' delete any network thay you do not need. If you use Yandex, than you need to insert your account code into it.

6. Last step is to add conversions in analytics:

Google Analytics:
Administrator => Goals => New Goal => Own => Type any title and choose Event => Type in "Category" & in "Action" name of your conversion. Example: nameOfConversion

Yandex Metrica:
Settings => Goals => Add Goal => JavaScript Event => In "Goal ID" type name of your conversion
