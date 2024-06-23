# Shotzon-Extensions

## Introduction

Hello, this is a set of TamperMonkey scripts that I created to enhance my experience while downloading from [Shotzon](https://shotzon.com/) and [ZSHORT](https://zshort.net/). These two URL shorteners appear to be identical, suggesting they may be from the same company or author.

Currently, the scripts include:

- **Anti-Anti AdBlock Bypass**: A script that bypasses the anti-adblock function of Shotzon.
- **First Page Captcha Bypass**: A script that bypasses the captcha on the first page.
- **Auto Download**: A script that automatically downloads the file in Shotzon when the download timer has finished. 

Unfortunately, it is **impossible** to bypass the last download page of Shotzon as there is a **server-side check** to see if one has waited 10 seconds to retrieve the link.

## How do I install?

1. Download any suitable user-script manager. I recommend [TamperMonkey](https://chromewebstore.google.com/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo) for Chrome and [ViolentMonkey](https://addons.mozilla.org/en-GB/firefox/addon/violentmonkey/) for Firefox.
2. Install these scripts: [Anti-Anti Adblock Bypass](https://raw.githubusercontent.com/SleepingPig35/Shotzon-Extensions/main/antiadblock.user.js) and [First Page Captcha Bypass](https://raw.githubusercontent.com/SleepingPig35/Shotzon-Extensions/main/captcha.user.js).
3. Click on your desired link.

## How can I help?

If you wish to help, please submit a PR (pull request) with any new features you wish to add. Also, please report bugs in the Issues tab of this repo.

## Credits

- [SleepingPig35](https://github.com/SleepingPig35) for creating these scripts.
- Jan Biniok for creating TamperMonkey.
- And **YOU** for using this repo!
