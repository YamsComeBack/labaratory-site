# laba-new-project

When I run /laba-new-project, do this workflow:

1) I'll provide:
- slug (example: business_merch)
- design example image path
- vector svg path
- title text
- main text

2) Locate and edit:
- frontend/src/app/projects/_content/<slug>/Index.tsx

3) Implement structure:
- split first image into `headerImage`
- keep the rest in `images[]`
- render first image at top as normal proportional image (`w-full h-auto`)
- place vector block right where the it placed on the example image.
- overlay title and main text on vector using classes `text-title` and `text-main`
- render remaining images below with proportional spacing
- keep desktop composition unchanged while scaling proportionally on smaller screens
- do not crop images. if they are already croped - uncrop them so they fully visable

4) Match style behavior from:
- frontend/src/app/projects/_content/priemnaya_company/Index.tsx
- frontend/src/app/projects/_content/business_merch/Index.tsx

5) After editing:
- run lint check for changed file
- summarize what was generated and which values were used.