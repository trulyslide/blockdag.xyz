// src/hooks/useSectionedHtml.js
import React, { useEffect, useState } from 'react';
import parse, { domToReact } from 'html-react-parser';
import { Element } from 'domhandler/lib/node';

const useSectionedHtml = (html) => {
  const [sectionedHtml, setSectionedHtml] = useState(null);

  useEffect(() => {
    const elements = parse(html);
    const sectionedElements = elements.map((element, index) => {
      if (element instanceof Element && element.tagName === 'h2') { // Adjust as needed
        return <section key={index}>{domToReact(element.children)}</section>;
      }
      return element;
    });

    setSectionedHtml(sectionedElements);
  }, [html]);

  return sectionedHtml;
};

export default useSectionedHtml;
