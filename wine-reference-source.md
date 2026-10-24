# Wine Reference Source File — Prototype 02

## 1. Purpose

This document is a structured companion to `wine-journal-source.md`.

It distills the spreadsheet workbook into a reusable reference artifact for:
- controlled vocabulary,
- tasting scales,
- aroma taxonomy,
- quick-reference teaching language,
- template/data-model design,
- future export/log ideas.

This file is meant to support product design and implementation decisions. It is not final end-user copy.

---

## 2. Processing Notes

### Highest-value workbook sections
The most useful sheets for Prototype 02 are:
- `B - Legend`
- `B - Aroma`
- `Scio`
- `B - Taste`
- `Template`
- `B - Log`
- `Sheet1`

### Lower-priority sections for Prototype 02
These are more useful later than now:
- `B - Winery`
- `B - Region`
- `Goals`
- duplicated short template sheets

### Normalization note
This reference file lightly normalizes obvious typos and awkward labels from the workbook where helpful for reuse.

Examples of likely normalization:
- “Teritary” → “Tertiary”
- “Black Cheer” → “Black Cherry”
- “Homeysuckle” → “Honeysuckle”
- “Vanila” → “Vanilla”
- “Volitalie” → “Volatile”

---

## 3. Controlled Vocabulary — Tasting Legend

## 3.1 Look

### Hue / Color
- White
- Pink
- Red

### Clarity / Opacity
- Pale
- Moderate
- Dark

### Viscosity
- category exists in the legend
- no low/medium/high labels are currently defined in the workbook

---

## 3.2 Smell

### Primary (Fruit) Intensity
- Mild
- Flavorful
- Bold

### Secondary
- Floral category exists
- no scale labels are currently defined

### Tertiary
- Oak category exists
- no scale labels are currently defined

### Flaws
- category exists
- no scale labels are currently defined

---

## 3.3 Taste

### Sweetness
- Dry
- Light Sweet
- Fully Sweet

### Acidity
- Mild
- Tangy
- Tart

---

## 3.4 Mouthfeel / Body

### Tannin (red only)
- Silky
- Velvety
- Rough

### Alcohol
- category exists
- no scale labels are currently defined

### Body
- Light
- Mid-Weight
- Heavy

### Carbonation
- Still
- Spritzy
- Sparkling

---

## 4. Working Definitions from the Workbook

These are useful internal reference definitions for lesson design.

### Sweetness
Sweetness is described as the sugary sensation on the tongue.

### Acidity
Acidity is described as a sour, salivating sensation.

### Body
Body is framed as weight or texture.

Useful analogies:
- Light = skim milk
- Mid = chocolate milk
- Heavy = milkshake

### Tannin
Tannin is framed as a drying, astringent mouthfeel associated with skins, seeds, and stems.

---

## 5. Aroma Taxonomy

The workbook is useful because it gives broad families first, then more specific examples.

## 5.1 Primary Aroma Families

### Floral
- Iris
- Peony
- Elderflower
- Acacia
- Lilac
- Jasmine
- Honeysuckle
- Violet
- Lavender
- Rose
- Potpourri
- Hibiscus

### Citrus
- Lime
- Lemon
- Grapefruit
- Orange
- Marmalade

### Tree Fruit
- Quince
- Apple
- Pear
- Nectarine
- Peach
- Apricot
- Persimmon

### Tropical Fruit
- Pineapple
- Mango
- Guava
- Kiwi
- Lychee
- Bubblegum

### Red Fruit
- Cranberry
- Red Plum
- Pomegranate
- Sour Cherry
- Strawberry
- Cherry
- Raspberry

### Black Fruit
- Boysenberry
- Black Currant
- Black Cherry
- Plum
- Blackberry
- Blueberry
- Olive
- Bramble

### Dried Fruit
- Raisin
- Fig
- Date
- Fruitcake

### Spice / Savory
- Mocha
- White Pepper
- Red Pepper
- Black Pepper
- Cinnamon
- Cassis
- Liquorice
- Anise
- Asian 5-spices
- Fennel
- Eucalyptus
- Mint
- Thyme

### Vegetable / Green / Herbal
- Black Tea
- Sun-Dried Tomato
- Tomato
- Green Almond
- Jalapeño
- Bell Pepper
- Gooseberry
- Tomato Leaf
- Grass

### Noble Rot / Sweet-Spice Notes
- Beeswax
- Ginger
- Saffron

### Earth / Mineral / Smoke
- Petroleum
- Volcanic Rocks
- Red Beet
- Potting Soil
- Wet Gravel
- Slate
- Clay Pot
- Smoke
- Tar

---

## 5.2 Secondary / Microbial Notes
- Mushroom
- Truffle
- Lager
- Sourdough
- Cream
- Butter
- Tobacco

---

## 5.3 Tertiary / Oak Aging Notes
- Dill
- Smoke
- Cigar Box
- Baking Spices
- Coconut
- Vanilla
- Leather
- Cocoa
- Coffee
- Tobacco
- Nuts
- Dried Fruit

---

## 5.4 Fault / Flaw Vocabulary

### Sulfides / Mercaptans
- Cat pee
- Onion
- Garlic
- Match box
- Burnt rubber
- Boiled eggs
- Cured meat

### Brettanomyces
- Horse manure
- Sweaty leather saddle
- Band-Aid
- Black cardamom

### TCA / Corked
- Wet dog
- Musty cardboard

### Cooked / Oxidized
- Stewed fruit
- Toffee

### Volatile Acidity
- Balsamic
- Vinegar

---

## 6. Quick-Reference Teaching Language from the Workbook

The `Scio` sheet is useful because it condenses teaching language into a fast reference format.

## 6.1 Direct vs Indirect Description

### Indirect
- poetic
- subjective
- more embellished
- more marketing-like

### Direct
- based on primary traits
- more concrete
- more objective
- easier for beginners to use quickly

### Product implication
Prototype 02 should keep teaching direct description first.

---

## 6.2 Basic Tasting Sequence
The quick-reference sheet uses a six-step flow:
1. Look
2. Swirl
3. Sniff
4. Sip
5. Swish
6. Savor

### Product implication
The app can still keep a simpler four-step structure, but this six-step logic is useful for lesson text and instructional framing.

---

## 6.3 Beginner Teaching Reminders from the Workbook
Useful instructional ideas:
- start with primary traits,
- start with color and simple structure first,
- use the power scale,
- smell broadly before getting specific,
- use direct description before poetic language,
- learn through repeated practice.

---

## 7. Template Architecture

The workbook is very useful for understanding how your content naturally separates.

## 7.1 Basic Info Fields
Core tasting metadata fields include:
- name
- varietal
- vintage
- date
- producer / maker
- vineyard
- region / county
- state / country
- AVA
- state of mind

### Product implication
You do not need all of these in Prototype 02, but they are useful for future note structure or export.

---

## 7.2 Analysis Block
The tasting template separates analysis into:
- Look
- Smell
- Taste
- Mouthfeel / Body
- Flaws

It uses:
- low / medium / high style structure,
- direct label column,
- notes column.

### Product implication
This is a useful model for separating:
- structured choice,
- direct summary,
- freeform note.

---

## 7.3 Final Assessment Block
The workbook uses a separate end section for:
- indirect description
- direct description
- conclusion
- score

### Product implication
This is very useful for fixing the Prototype 01 ending.

A cleaner final step can separate:
1. quick reaction,
2. personal note,
3. guided summary,
4. optional technical rewrite.

That is better than one overloaded combined text area.

---

## 7.4 Faults
The structured template includes a fault field.

### Product implication
Prototype 02 does not need a full faults section yet, but this could become:
- a future advanced mode,
- or a stretch educational note later.

---

## 8. Logging / Export Schema Ideas

The `B - Log` sheet is a strong hint for future no-backend export or local-file ideas.

## 8.1 Wine Log Fields
- score
- name
- varietal
- vintage
- AVA
- value
- source
- recommendation

## 8.2 Winery Log Fields
- name
- score
- AVA
- value
- recommendation

### Product implication
If you later add export without backend, this log structure is a very good starting schema.

---

## 9. Old World vs New World Heuristic Sheet

The workbook includes a very small contrast table that may be useful later as optional educational content.

### Climate framing
- Old World: cooler regions, lower ripeness
- New World: sunnier, drier, higher ripeness

### Winery / culture framing
- Old World: tradition, closer tie to local cuisine
- New World: technology, ready-to-drink style emphasis

### Product implication
This should be treated as a light heuristic or future lesson idea, not as core Prototype 02 content.

---

## 10. What This Workbook Adds That the Journal Source File Did Not

Compared with `wine-journal-source.md`, this workbook adds stronger structure for:
- controlled vocabulary,
- scale labels,
- aroma categories,
- tasting template architecture,
- logging schema,
- concise reference-sheet language.

That makes this file a better companion reference than a replacement for the narrative source.

---

## 11. Recommended Use in Prototype 02

Use this file for:
- defining dropdown or button labels,
- designing future vocabulary sets,
- writing short lesson text,
- cleaning up the final step structure,
- planning future export fields.

Do not use it as direct end-user copy without review.

---

## 12. Content to Review Before Shipping

The workbook is useful, but not clean enough to copy directly into product content.

### Reasons to review first
- typos and label inconsistencies,
- some incomplete scale categories,
- some broad simplifications,
- some draft-only sheet structure.

### Examples of caution areas
- absolute-sounding statements,
- placeholder sections with no scale values,
- rough or jokey flaw labels that may need tone review.

---

## 13. Best High-Value Extracts from This Workbook

If you only keep a few things from this file for future work, keep these:

1. tasting legend scales,
2. aroma family taxonomy,
3. quick-reference direct-vs-indirect framing,
4. tasting sequence summary,
5. template architecture,
6. wine-log field schema.

---

## 14. Suggested Next Use

This file is now ready to support:
- Day 3 of Prototype 02,
- lesson-note design,
- final-step redesign,
- future export/log ideas,
- future architecture or data-model thinking.

It should be used alongside:
- `wine-journal-source.md` for teaching philosophy and narrative guidance,
- `prototype-02-plan.md` for sprint scope and goals.
