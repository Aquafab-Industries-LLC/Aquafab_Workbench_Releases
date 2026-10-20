# Aquafab Workbench — releases

Installers for **Aquafab Workbench**, the control, monitoring and analysis
software for Aquafab Industries flow chambers, respirometry systems, swim
tunnels and life-support racks.

This repository holds **installers only**. The source code is private and is not here.

## Download

Get the latest version from the Aquafab website (sign in with the email on your order):

**<https://aquafabindustries.com/pages/aquafab-workbench#downloads>**

| Platform | Installer |
| --- | --- |
| Windows 10/11 (64-bit) | `AquafabWorkbench-Windows.exe` |
| macOS | `AquafabWorkbench-macOS.dmg` |
| Raspberry Pi (64-bit Raspberry Pi OS) | `AquafabWorkbench-RaspberryPi.deb` |
| Other Linux (x86-64) | `AquafabWorkbench-Linux.AppImage` |

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

Installed copies check this repository's latest `version.json` at most once a
day. When a newer version exists, the software tells the operator and opens the
download page. **It never downloads or installs anything by itself**, and the
check sends no data about your lab or your machines: it is a plain read of a
public file.

## Support

- Website: <https://aquafabindustries.com/pages/support>
- Email: [sales@aquafabindustries.com](mailto:sales@aquafabindustries.com)
- Phone: +1 (513) 781-8010

Aquafab Workbench is laboratory control software. It is not a safety system,
and no interlock in it is rated or certified.

---

## For Aquafab: making a release

Every release is one GitHub Release in this repo, tagged `vX.Y.Z` (matching
`version` in `pyproject.toml`), with these five assets. **Keep the file names
exactly the same every time.** The website and the installed software link to
`releases/latest/download/<name>`, which always serves the newest release's
file of that name, so nothing else has to change.

| Asset | What it is |
| --- | --- |
| `AquafabWorkbench-Windows.exe` | Windows installer |
| `AquafabWorkbench-macOS.dmg` | macOS installer |
| `AquafabWorkbench-RaspberryPi.deb` | Raspberry Pi package |
| `AquafabWorkbench-Linux.AppImage` | Other Linux |
| `version.json` | Read by installed copies to notice an update |

1. Edit `version.json` in this repo: new `version`, `published` and `notes`.
   Raise `minimum_version` only when older copies must not keep running.
2. Draft a new release, tag `vX.Y.Z`, title `Aquafab Workbench X.Y.Z`, and
   paste the notes.
3. Attach the four installers and the updated `version.json`.
4. Publish. Optionally update the version shown on the website's resource
   library entry.

Never put source code, license keys, the license signing key, or customer data
in this repository. It is public.
