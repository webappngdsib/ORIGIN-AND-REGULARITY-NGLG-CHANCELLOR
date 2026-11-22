# ORIGIN-AND-REGULARITY-NGLG-CHANCELLOR

**Origin and Regularity of the National Grand Lodge of Greece** — a dossier for fraternal review, presented as a website that exports to a structured A4 PDF.

Signed by the Grand Secretary, **RW. Bro Dimitrios Skiadopoulos**.

## Contents

The dossier contains a cover page, a table of contents and 11 chapters:

1. Executive summary
2. The eight basic principles of recognition, plus membership, conduct and sovereignty
3. Regular origin: 7 June 1986 and the six founding Lodges
4. Chain of recognition from 1986 to today, and coexistence with the GLG
5. The NGLG today, with a full-width **Grand Meeting** photograph
6. Leadership, with photographs of the **Grand Master** and the **Grand Secretary**, and the 14 Grand Masters
7. The 20 Masonic Temples of the NGLG
8. The register of the **102 mutual recognitions**, by region and searchable
9. Governance, and the Masonic bodies and independent orders
10. Conclusion: the four pillars of regularity
11. Attestation, closing with the signature of the Grand Secretary

## Languages

The site is available in English 🇬🇧, Spanish 🇪🇸 and Brazilian Portuguese 🇧🇷. Choose a language with the flag buttons in the top bar, or link to one directly with `?lang=en`, `?lang=es` or `?lang=pt`.

## Export to PDF (A4)

Click **Export A4 PDF**. In the print dialog, choose *Save as PDF*, set the paper to A4 and keep *Background graphics* turned on. Each chapter starts on a new page. Every page carries a running footer with the Grand Secretary's signature line and page numbers. The PDF always contains the full register of recognitions, even when a search is active.

Pre-built PDFs are in [`pdf/`](pdf/).

## Photographs

There are two ways to add photographs:

- **For everyone:** commit the photos to `assets/photos/` under these names. Visitors and the exported PDF will then show them.
  - `grand-meeting.jpg` — the Grand Meeting, wide landscape (about 3:1)
  - `grand-master.jpg` — the Grand Master, portrait (4:5)
  - `grand-secretary.jpg` — the Grand Secretary, portrait (4:5)
- **On one computer only:** click **Add photograph** on the page. The photo is stored in that browser only.

Photographs of the temples go in the `photo` field of each entry in `assets/data-nglg.js`.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure |
| `assets/style.css` | Styling for screen and A4 print |
| `assets/app.js` | Language switching, register search, photo slots, print footer |
| `assets/i18n.js` | All texts in EN / ES / PT-BR |
| `assets/data-recognitions.js` | The 102 mutual recognitions |
| `assets/data-nglg.js` | Temples, Grand Masters, founding Lodges, country and city names |

## Publishing

To publish the site, go to Settings → Pages in the repository and choose to deploy from this branch, using the root folder.
