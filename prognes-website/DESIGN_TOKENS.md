# DESIGN TOKENS

## Philosophy

Premium editorial technology aesthetic.

Dark, restrained, high contrast, sophisticated.

No neon cyberpunk aesthetic.
No excessive gradients.
No generic SaaS card styling.

---

# COLORS

## Base

--color-bg: #0A0A0A;
--color-surface: #111111;
--color-surface-elevated: #171717;

## Text

--color-text-primary: #F5F5F5;
--color-text-secondary: #A3A3A3;
--color-text-muted: #737373;

## Borders

--color-border: rgba(255,255,255,0.12);
--color-border-strong: rgba(255,255,255,0.22);

## Accent

Use a restrained warm accent rather than neon.

--color-accent: #D6FF3F;
--color-accent-soft: rgba(214,255,63,0.12);
--color-accent-contrast: #0A0A0A;

Accent must be used selectively for:

- Primary CTA
- Important interactive states
- Small highlights
- Key data points
- Signature visual details

Do not flood sections with accent color.

---

# TYPOGRAPHY

Primary display/editorial font:

Space Grotesk

Body/UI:

Inter

Use only these two families.

---

# TYPE SCALE

## Display

Hero:

clamp(4rem, 8vw, 8.5rem)

Line height:

0.90

Letter spacing:

-0.055em

## H1

clamp(3.25rem, 6vw, 6.5rem)

Line height:

0.92

Letter spacing:

-0.045em

## H2

clamp(2.5rem, 4.5vw, 5rem)

Line height:

0.95

Letter spacing:

-0.035em

## H3

clamp(1.5rem, 2.5vw, 2.5rem)

Line height:

1.05

## Large body

clamp(1.125rem, 1.4vw, 1.375rem)

Line height:

1.55

## Body

1rem

Line height:

1.6

## Small

0.875rem

Line height:

1.5

## Label

0.6875rem

Line height:

1.2

Letter spacing:

0.12em

Text transform:

uppercase

---

# FONT WEIGHTS

Display:

600

Headings:

600

Body:

400

Labels:

500

Buttons:

500

Avoid excessive font-weight variation.

---

# LAYOUT

Maximum page width:

1440px

Reading width:

680px

Wide content:

1200px

Desktop horizontal padding:

48px

Tablet:

32px

Mobile:

20px

---

# GRID

Desktop:

12 columns

Column gap:

24px

Tablet:

8 columns

Column gap:

20px

Mobile:

4 columns

Column gap:

16px

---

# SECTION SPACING

Desktop:

120px minimum

Large sections:

160px

Hero:

160px+ vertical breathing room

Tablet:

96px

Mobile:

72px

Do not force identical spacing between every section.

---

# COMPONENT SPACING

Small:

8px

Medium:

16px

Large:

24px

XL:

32px

XXL:

48px

---

# BUTTONS

Primary height:

52px

Horizontal padding:

24px

Border radius:

999px

Primary:

Accent background
Dark text

Secondary:

Transparent
Light border
Light text

Button interaction:

150–250ms

Use transform/opacity rather than layout animation.

---

# BORDERS

Default:

1px

Color:

rgba(255,255,255,0.12)

Strong:

rgba(255,255,255,0.22)

Avoid excessive borders.

---

# RADIUS

Editorial design should remain relatively sharp.

Small:

4px

Medium:

8px

Large:

12px

Pills:

999px

Do not make every component rounded.

---

# NAVIGATION

Desktop height:

80px

Mobile:

68px

Logo:

left

Navigation:

center/right

Primary CTA:

right

Mobile:

logo + menu

---

# MOTION

Micro:

150–250ms

Standard:

350–600ms

Large:

700–1200ms

Hero / signature:

1000–1800ms

Preferred easing:

cubic-bezier(0.22, 1, 0.36, 1)

Avoid constant looping animations.

---

# BREAKPOINTS

Mobile:

< 768px

Tablet:

768px – 1199px

Desktop:

>= 1200px

Large desktop:

>= 1440px

Use fluid sizing where possible.

Do not design for individual laptop models.

---

# PERFORMANCE

Do not load 3D before the page is usable.

Hero fallback must render immediately.

Images must be optimized.

Fonts must be loaded through next/font.

Animations should prioritize:

transform
opacity

Avoid animating:

width
height
top
left

unless unavoidable.

---

# MOBILE RULES

No live WebGL.

No complex pinned scroll storytelling.

No tiny desktop diagrams.

No horizontal overflow.

Minimum interactive target:

44px

AI Growth:

stacked selector

AI Systems:

vertical architecture

Flywheel:

vertical sequence

---

# ACCESSIBILITY

WCAG 2.2 AA.

Minimum focus visibility.

Keyboard navigation.

Semantic headings.

Reduced motion.

Sufficient contrast.

Decorative 3D marked aria-hidden.

---

# DESIGN RULE

The website should feel expensive because of:

typography
spacing
composition
imagery
motion
interaction

—not because of:

gradients
glows
particles
random 3D
excessive shadows