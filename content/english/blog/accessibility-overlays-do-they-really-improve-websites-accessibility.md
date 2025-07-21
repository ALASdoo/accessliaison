---
title: "Accessibility overlays: Do they really improve websites' accessibility?"
date: 2025-02-14T10:07:21+06:00
# post image
image: 'images/blog/overlays.jpg'
image_alt: 'On the left side of the dark computer monitor there is the symbol for a web accessibility plugin. On the right there is a neon skull graphyc.'
# author
author: 'Tajana Somogyi'
# authorLink: 'https://www.linkedin.com/in/tajana-somogyi'
# post type (regular/featured)
# type: 'featured'
# meta description
description: 'This is meta description'
# post draft
draft: false

cta:
  title: 'Tackle accessibility with confidence'
  content: 'Ensuring accessibility can feel overwhelming, but you don’t have to do it alone. Chat with an accessibility expert to see how we can help.'
  btn_label: 'Book a free consultation'
  btn_link: 'https://calendly.com/vilmos/meet'
---

If you're a website owner without deep accessibility expertise, you may have been sweet-talked into installing an accessibility overlay widget. You may have been promised compliance with laws such as:

- The **European Accessibility Act (EAA)**
- The **Americans with Disabilities Act (ADA)**
- The **Ontarians with Disabilities Act (AODA)**
- **Section** **508** of the Rehabilitation Act
- The **UK Equality Act**

However, **accessibility overlays do not ensure compliance** with these regulations. To save yourself **time, resources, legal risks, and brand tarnish**, you should know that overlays are not an acceptable alternative or a substitute for fixing the website itself.

## Table of contents: {#toc-heading}

<ul aria-labelledby="toc-heading">
  <li><a href="#what-is-an-accessibility-overlay">What is an accessibility overlay?</a></li>
  <li><a href="#why-overlays-fall-short">Why overlays fall short</a>
    <ul>
      <li><a href="#incomplete-fixes">Incomplete fixes</a></li>
      <li><a href="#interference-with-assistive-technologies">Interference with assistive technologies</a></li>
      <li><a href="#privacy-risks">Privacy risks</a></li>
    </ul>
  </li>
  <li><a href="#properly-implemented-accessibility-is-the-only-way-to-compliance">Properly implemented accessibility is the only way to compliance</a></li>
</ul>

## What is an accessibility overlay?

Accessibility overlays, plug-ins, or widgets are software add-ons to a website that enable users to **quickly change the appearance of a web page**. Usually, they allow users to change contrast, font size, type of font, and cursor visibility to preset values.

This option might be useful for people who are not using assistive technology. For persons with disabilities, using assistive technology — such as screen reader, voice recognition, and screen magnifier — can be the only way to access online content. For them, **overlays can create significant issues** and even make a website unusable.

{{< notice note >}}Overlays often duplicate accessibility functions already built into web browsers and operating systems. Guiding users in setting their preferred settings on a browser/device would be a more efficient way of providing support.{{</ notice >}}

Some newer overlay products claim to improve code by detecting and “fixing” certain elements automatically. In the further text, we will address the limitations of such fixes.

## Why overlays fall short

Overlays **cannot make your website compliant** with EAA, ADA, and other accessibility laws. Neither can they guarantee conformance with standards like Web Content Accessibility Guidelines (WCAG), EN 301549, and Section 508\. Products with such claims raise a major red flag.

**Overlay providers are facing lawsuits** for breach of contract. In one case, a business was sued by a blind user for having an inaccessible website — despite using an overlay widget. The business then {{< link_external url="https://www.lflegal.com/2024/07/accessibe-class-action/#article-updates" >}}sued the overlay provider{{< /link_external >}}, arguing that the widget’s effectiveness was overstated and its claims were “materially misleading and false”. The lawsuit further stated that the overlay actually hindered accessibility rather than improving it.

{{< link_external url="https://www.edf-feph.org/publications/joint-statement-on-accessibility-overlays/" >}}The European Disability Forum and the International Association of Accessibility Professionals in their joint statement{{< /link_external >}} confirm that the **“widgets” cannot repair all possible issues**, meaning that they cannot provide compliance. Here’s why.

### Incomplete fixes

Some overlay products offer repairs to the underlying page when loaded in the browser. While some trivial accessibility problems can be repaired this way, the accuracy of such repairs is limited. The problem is that overlays may fix surface-level issues but **fail to address deeper structural, semantic, or navigational barriers**.

{{< custom-table >}}

<table>
  <caption>Limitations of automatic fixes by overlay products</caption>
  <thead>
    <tr>
      <th scope="col">Fix</th>
      <th scope="col">Aim</th>
      <th scope="col">Limitation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><strong>Enabled basic keyboard navigation</strong></th>
      <td>Ensures all interactive elements (such as buttons, links, and forms) are navigable via keyboard</td>
      <td>Does not check focus order and keyboard traps</td>
    </tr>
    <tr>
      <th scope="row"><strong>Improved color contrast</strong></th>
      <td>Enhances contrast to improve readability</td>
      <td>Ruins user experience with random color combinations; overrides user’s preferences</td>
    </tr>
    <tr>
      <th scope="row"><strong>ALT text detection and generation</strong></th>
      <td>Detects missing ALT text and automatically generates it for images</td>
      <td>Cannot detect when an alt text is redundant (decorative image, already existent text); auto-generated text is not meaningful</td>
    </tr>
    <tr>
      <th scope="row"><strong>Offered generic accessibility statement</strong></th>
      <td>Provides a ready-to-use draft for your website's accessibility statement</td>
      <td>A valid accessibility statement cannot be provided without a proper audit; the draft may not match the template required by the law</td>
    </tr>
    <tr>
      <th scope="row"><strong>Enabled language identification</strong></th>
      <td>Assists with language identification, ensuring screen readers correctly interpret and pronounce text</td>
      <td>If your website does not have the language set, you should consider changing the platform/theme/developer, as this is a basis for a decent code</td>
    </tr>
    <tr>
      <th scope="row"><strong>Improved text resizing and line spacing</strong></th>
      <td>Offers text resizing and line spacing options to improve readability</td>
      <td>WCAG does not require this, instead, it requires for user’s preferences to be respected, without any loss in content; the widget’s settings usually interfere with the browser’s zoom, failing WCAG criteria</td>
    </tr>
    <tr>
      <th scope="row"><strong>Enhanced cursor visibility</strong></th>
      <td>Offers the option for a more visible cursor</td>
      <td>Not required for WCAG conformance</td>
    </tr>
  </tbody>
</table>
{{< /custom-table >}}

{{< custom-table >}}

<table>
  <caption>Issues that overlay products cannot fix explained</caption>
  <thead>
    <tr>
      <th scope="col">The issue that cannot be fixed</th>
      <th scope="col">Explanation</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Semantic HTML</td>
      <td>Cannot add missing semantic elements and cannot correct the ones that are not properly assigned</td>
    </tr>
    <tr>
      <td>Non-descriptive elements</td>
      <td>Cannot fix non-descriptive links, headings, buttons, and form labels</td>
    </tr>
    <tr>
      <td>Headings</td>
      <td>Cannot detect incorrect heading levels and  not-meaningful heading text; can overwhelm screen reader users by marking non-heading elements as headings</td>
    </tr>
    <tr>
      <td>ARIA roles and attributes</td>
      <td>The incorrect use of ARIA roles and attributes must be manually remediated</td>
    </tr>
    <tr>
      <td>Inaccessible PDFs</td>
      <td>PDFs embedded on your site must be remediated separately (using automated tools, manual remediation, and testing with a screen reader) to ensure they are accessible</td>
    </tr>
    <tr>
      <td>Custom widgets and interactive elements</td>
      <td>Cannot remediate custom JavaScript-based widgets, such as dropdowns, sliders, or modals</td>
    </tr>
    <tr>
      <td>Form validation feedback</td>
      <td>The widget does not address form validation accessibility (e.g. error messages must be conveyed correctly to screen readers through proper coding).</td>
    </tr>
    <tr>
      <td>iFrames</td>
      <td>Third-party content embedded via iFrames, such as external widgets or maps, cannot be made accessible by the overlay widget</td>
    </tr>
    <tr>
      <td>Complex layout and navigation issues</td>
      <td>Does not address structural layout problems, such as inaccessible table designs, improper use of flexbox/grid for content layout, or incorrect stacking order, which could affect navigation and readability</td>
    </tr>
    <tr>
      <td>Skip links</td>
      <td>Cannot add skip links (e.g., “skip to main content”), which are critical for keyboard and screen reader users.</td>
    </tr>
    <tr>
      <td>Responsive design</td>
      <td>Cannot resolve issues related to improper responsive design, such as elements becoming inaccessible on smaller screens or touch targets being too small</td>
    </tr>
    <tr>
      <td>Focus management</td>
      <td>While the widget improves focus visibility, it does not manage focus order, prevent keyboard traps, or handle focus when interacting with dynamic content or modal dialogs</td>
    </tr>
  </tbody>
</table>
{{< /custom-table >}}

In addition to the above, overlays **do not repair content in Flash, Silverlight, HTML5 Canvas, SVG, or media files**. Also, overlays **do not address user experience (UX) and consistency**. These are the basis for many of the WCAG criteria. They must be tested and remediated manually.

{{< notice note >}}
If you are considering using the widget for monitoring, you should know that most of the issues reported are similar to those discovered by **free web accessibility checkers** such as {{< link_external url="https://wave.webaim.org/" >}}Wave{{< /link_external >}} and {{< link_external url="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd" >}}axe DevTools Chrome extension{{< /link_external >}}. These, and similar tools, provide a more systematic report of the issues, and you get that for free\!{{</ notice >}}

### Interference with assistive technologies

Users with disabilities carefully set their assistive devices/software to best suit their needs. Overlays’ generic approach interferes with these settings. This results in complicating, and even blocking, access for persons with disabilities.

{{< notice important >}}
**Screen reader users often comment that they avoid websites that use overlay plugins. Unpredictable changes that overlays create hinder the usability and accessibility of the page for them.**
{{</ notice >}}

### Privacy risks

Accessibility overlays may automatically detect assistive technology, exposing a user's disability status without their consent. Disability, like age, gender, or ethnicity, is sensitive personal information. Laws such as the **General Data Protection Regulation (GDPR)** and the **California Consumer Privacy Act (CCPA)** require explicit user consent before collecting such data. Additionally, some overlays track user settings across multiple sites, creating further **data privacy violations**.

{{< notice important >}}
**Adding an overlay to your site could put you at risk of non-compliance with privacy regulations, leading to fines, legal action, and loss of user trust.**
{{</ notice >}}

## Properly implemented accessibility is the only way to compliance

Accessibility overlays might sound appealing as a quick fix, but they don’t deliver what they promise. While no law explicitly bans such tools, they all stress **the** **importance of accessibility being built into the design and functionality** of digital products, ensuring an inclusive experience for users with disabilities without relying on secondary aids.

> EAA: “Accessibility should be achieved by the systematic removal and prevention of barriers, preferably through a universal design or ‘design for all’ approach, which contributes to ensuring access for persons with disabilities on an equal basis with others.”

The best approach is to **embed accessibility into the design, development, and content processes** of digital platforms. An accessible website must consider things like semantic HTML, keyboard navigation, screen reader compatibility, user experience, and accessible content.

If your website wasn’t built for accessibility, you can still **achieve genuine accessibility with the right tools and approach**. By conducting audits, fixing code, engaging accessibility experts, and implementing ongoing monitoring, you can build a digital presence that complies with relevant laws and is enjoyable to all.

Steps to true accessibility:{#steps}

<ol aria-labelledby="steps">
  <li><strong>Identify the current accessibility barriers</strong> on your site by conducting a full accessibility audit.</li>
  <li><strong>Seek guidance from accessibility experts</strong> to choose the most efficient tools and approach.</li>
  <li><strong>Fix the UX, the code, and the content</strong> that create the issues.</li>
  <li>Choose <strong>accessible third-party widgets</strong>.</li>
  <li><strong>Test with real users</strong> of assistive technology.</li>
  <li><strong>Train your team</strong> on accessibility best practices to achieve ongoing accessibility.</li>
  <li><strong>Monitor accessibility</strong>, especially when the content and features are updated.</li>
  <li><strong>Keep up to date</strong> with changes in legislation.</li>
</ol>

Commitment to accessibility reflects your organization's **dedication to inclusion and high-quality service**. By achieving true accessibility, you are **improving the search engine optimization (SEO) and user experience (UX)** of your website / web app. Your customers and current and potential employees will value your efforts.
