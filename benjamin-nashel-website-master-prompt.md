
# Benjamin Nashel – Portfolio Website Master Prompt

## 🧠 Overview

Please create a modern, minimalist portfolio website for **Benjamin Nashel**. The entire site must be:

- **lowercase only** (text, headers, links, nav)
- styled in **Helvetica font**
- designed with a **white background** for all pages
- navigation is **text-based hyperlinks**, underlined, no icons

---

## ✅ GENERAL STRUCTURE

- **Site-wide font**: Helvetica
- **Text transform**: all text must be lowercase
- **Background**: white throughout the site
- **Navigation**:
  - Appears **below homepage animation**
  - All links styled as **hyperlinked lowercase words**
  - Underline each hyperlink
  - Links:
    - `about me`
    - `movies + books`
    - `art`
    - `music`

---

## ✅ PAGE 1: FRONT PAGE (HOME)

### Background:
- Use the provided **“merging spheres consciousness” animation** as a full-screen background.
- The animation will be provided as an HTML/CSS/JS animation file or embedded `<canvas>`.

### Top Centered Text:
- Show `benjamin nashel` in Helvetica
- Add a **typing animation** (text appears character by character)

### Below:
- Navigation hyperlinks: `about me`, `movies + books`, `art`, `music`
- All links are lowercase, underlined, centered, and styled in Helvetica

---

## ✅ PAGE 2: ABOUT ME + MOVIES + BOOKS

### Main Visual:
- Full-width **cover image of a “french dude”** (placeholder for now)
- Mimic the design/layout of [https://suryamidha.com/](https://suryamidha.com/)

### Content Layout:
- Add placeholder for **bio paragraph**, to be added later

### Below bio:
Show movie and book lists (use same Helvetica font, lowercase, no bullets)

#### my favorite movies:
```
a clockwork orange (dir. stanley kubrick)  
scarface (dir. brian de palma)  
black swan (dir. darren aronofsky)  
oldboy (dir. park chan-wook)  
city of god (dir. fernando meirelles & katía lund)
```

#### my favorite books:
```
the plot against america (by philip roth)  
kafka on the shore (by haruki murakami)  
the wind-up bird chronicle (by haruki murakami)  
fierce invalids home from hot climates (by tom robbins)  
the dharma bums (by jack kerouac)
```

---

## ✅ PAGE 3: ART

### Layout:
- Each artwork appears **full-width or large**, stacked vertically

### Below each image, show:
```
the death of socrates (jacques-louis david, 1787)  
the triumph of death (pieter bruegel the elder, c. 1562)  
the fall of the rebel angels (pieter bruegel the elder, 1562)  
the elephants (salvador dalí, 1948)  
the creation of the birds (remedios varo, 1957)  
melancholy and mystery of a street (giorgio de chirico, 1914)
```

---

## ✅ PAGE 4: MUSIC

### Intro Text at top of section:
```
a selection of ambient music i've composed in my free time:
```

### Tracklist:
```
blue wave: logic, felt piano, sync bass  
drum buddy: one of a kind rhythm module  
morning phase: freq shifting in logic, felt piano, moog  
the golden god: distorted moog, heavy bass  
the inevitable cycle: violin, trumpet, felt piano
```

---

## ✅ PLACEHOLDERS & FILES

- Use `<div>` or `<img>` placeholders for all artwork and background images
- Expect an HTML/CSS animation file for the homepage background
- Each section should be its own scrollable page or navigable anchor

---

## ✅ INTERACTIONS & DESIGN NOTES

- Text fades or types in softly (typing effect on homepage title)
- Keep all animations **subtle** and **minimal**
- Transitions between pages: soft fade or instant scroll
- No uppercase, no icons, no color besides black text on white background

---

## 📂 EXPECTED OUTPUT STRUCTURE

```
/index.html        → Homepage with animation + links  
/about.html        → Bio + movies + books  
/art.html          → Image-heavy vertical stack  
/music.html        → Text-based tracklist  
/assets/           → Animation files, image placeholders, fonts  
/styles.css        → All lowercase Helvetica styling  
/script.js         → Typing animation + interactions  
```
