<objective>
Add complete Italian language support to the Kytlos landing page with a language switcher.

The goal is to make the website accessible to both English and Italian-speaking audiences, with an intuitive way to switch between languages. This will expand Kytlos's reach in the Italian market.
</objective>

<context>
This is an Astro-based landing page for Kytlos, an AI consulting company for startups. The project uses:
- Astro 5.16.11
- Tailwind CSS for styling
- Simple landing page structure

Astro has built-in internationalization (i18n) support that should be leveraged for this implementation.

Before starting, examine the current project structure:
- Review the project structure to understand current pages and components
- Check astro.config.mjs for existing configuration
- Identify all text content that needs translation
</context>

<requirements>
1. **Internationalization Setup**:
   - Configure Astro's built-in i18n support in astro.config.mjs
   - Set up routing for /en and /it paths
   - Set English (en) as the default language
   - Configure Italian (it) as the secondary language

2. **Content Translation**:
   - Create translation files or structure for both English and Italian
   - Translate ALL page content including:
     - Headings and subheadings
     - Paragraphs and descriptions
     - Button labels and CTAs
     - Navigation items
     - Any other visible text
   - Maintain the same tone and messaging intent in Italian

3. **Language Switcher**:
   - Add a language switcher component in the header/navigation area
   - Display abbreviated language codes: "EN" and "IT"
   - Make the switcher visually clear and accessible
   - Highlight the currently active language
   - Ensure switcher works from any page

4. **User Experience**:
   - Preserve the current page when switching languages (e.g., /en/about → /it/about)
   - Ensure smooth transitions without page flicker
   - Make the language preference obvious to users
</requirements>

<implementation>
1. **Use Astro's i18n Features**:
   - Configure the `i18n` option in astro.config.mjs with locales and defaultLocale
   - Use Astro's routing structure for localized pages
   - Follow Astro's best practices for internationalization

2. **Organization Approach**:
   - Create a clean structure for managing translations (e.g., content collections, JSON files, or inline translations)
   - Keep translations maintainable and easy to update
   - Avoid hardcoding strings in components

3. **Styling Consistency**:
   - Ensure the language switcher matches the existing design aesthetic
   - Use Tailwind CSS classes consistent with the rest of the site
   - Make the switcher responsive on mobile devices

4. **What to Avoid and WHY**:
   - Don't use external i18n libraries when Astro has built-in support - this adds unnecessary complexity and bundle size
   - Don't redirect users automatically based on browser language without their consent - this can be disorienting and assumes location equals language preference
   - Don't break existing URLs - maintain backward compatibility with the current structure
</implementation>

<output>
Create or modify the following files:

- `./astro.config.mjs` - Add i18n configuration
- `./src/i18n/` or similar - Translation files/utilities
- `./src/components/LanguageSwitcher.astro` (or similar) - Language switcher component
- Update existing page files to support both languages
- Update any layout files to include the language switcher in the header

Provide a brief summary of the changes and how the i18n system works.
</output>

<verification>
Before declaring complete, verify your implementation:

1. **Test Both Languages**:
   - Run `npm run dev` and visit http://localhost:4321
   - Verify the page loads in English by default
   - Verify /en and /it routes work correctly
   - Confirm all content is properly translated

2. **Test Language Switcher**:
   - Click between EN and IT - ensure it works smoothly
   - Verify the active language is visually indicated
   - Check that the switcher is accessible via keyboard (Tab + Enter)

3. **Visual Quality Check**:
   - Ensure Italian text fits properly in all layouts
   - Verify no layout breaks due to different text lengths
   - Check mobile responsiveness of the switcher

4. **Build Test**:
   - Run `npm run build` to ensure the site builds without errors
   - Verify both language versions are generated correctly
</verification>

<success_criteria>
- ✓ Astro i18n is properly configured in astro.config.mjs
- ✓ Website accessible at both /en and /it routes
- ✓ English is the default language (root and /en)
- ✓ All page content has accurate Italian translations
- ✓ Language switcher is visible and functional in the header
- ✓ Active language is clearly indicated in the switcher
- ✓ Site builds successfully with both languages
- ✓ No broken layouts or styling issues in either language
</success_criteria>
