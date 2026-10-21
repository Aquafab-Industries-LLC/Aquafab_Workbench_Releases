# Aquafab Workbench — releases

Installers for **Aquafab Workbench**, the control, monitoring and analysis
software for Aquafab Industries flow chambers, respirometry systems, swim
tunnels and life-support racks.

This repository holds **installers only**. The source code is private and is not here.

## Download

Get the latest version from the Aquafab website (sign in, or create a free account):

**<https://aquafabindustries.com/pages/aquafab-workbench#downloads>**

| Platform | Installer |
| --- | --- |
| Windows 10/11 (64-bit) | `AquafabWorkbench-Windows.exe` |
| Mac with Apple silicon (M1 or later) | `AquafabWorkbench-macOS.dmg` |
| Mac with an Intel processor | `AquafabWorkbench-macOS-Intel.dmg` |
| Linux (x86-64) | `AquafabWorkbench-Linux.AppImage` |

Raspberry Pi control computers are set up by Aquafab. Contact
[support](mailto:sales@aquafabindustries.com) if yours needs reinstalling.

Each release lists what changed in its notes on the
[Releases](../../releases) page.

## License key

Aquafab Workbench asks for a license key the first time it opens. A key comes
with every Aquafab system and works on every computer in your lab. If you need
one, request it on the software page above or email
[sales@aquafabindustries.com](mailto:sales@aquafabindustries.com).

The software checks the key only when it starts. It never stops a trial, a
pump or a heater that is already running because of a license.

## Updates

To update, download the newest installer and install it over the old one.
Your machines, calibrations and trials are kept. **The software never
downloads or installs anything by itself.**

## Support

- Website: <https://aquafabindustries.com/pages/support>
- Email: [sales@aquafabindustries.com](mailto:sales@aquafabindustries.com)
- Phone: +1 (513) 781-8010

Aquafab Workbench is laboratory control software. It is not a safety system,
and no interlock in it is rated or certified.

---

## For Aquafab: making a release

Releases are published automatically. Pushing a `vX.Y.Z` tag to the private
source repository builds every installer and creates the release here, with
`version.json` written from the files themselves. The steps and the token it
needs are in the source repository's `docs/PACKAGING.md`.

Each release carries the same file names. **Never rename them.** The website
links to `releases/latest/download/<name>`, which always serves the newest
release's file of that name.

| Asset | What it is |
| --- | --- |
| `AquafabWorkbench-Windows.exe` | Windows installer |
| `AquafabWorkbench-macOS.dmg` | Mac, Apple silicon |
| `AquafabWorkbench-macOS-Intel.dmg` | Mac, Intel |
| `AquafabWorkbench-Linux.AppImage` | Linux, x86-64 |
| `version.json` | Version, notes, and each file's SHA-256 |

Never put source code, license keys, the license signing key, or customer data
in this repository. It is public.
