import React, { useEffect, useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowUp } from "@fortawesome/free-solid-svg-icons";

const getNestedHeadings = (headingElements) => {
    const nestedHeadings = [];

    headingElements.forEach((heading, index) => {
        const { innerText: title, id } = heading;

        if (heading.nodeName === "H2") {
            nestedHeadings.push({ id, title, items: [] });
        } else if (heading.nodeName === "H3" && nestedHeadings.length > 0) {
            nestedHeadings[nestedHeadings.length - 1].items.push({
                id,
                title,
            });
        }
    });

    return nestedHeadings;
};

const useHeadingsData = () => {
    const [nestedHeadings, setNestedHeadings] = useState([]);

    useEffect(() => {
        const headingElements = Array.from(
            document.querySelectorAll("h2, h3")
        );

        const newNestedHeadings = getNestedHeadings(headingElements);
        setNestedHeadings(newNestedHeadings);
    }, []);

    return { nestedHeadings };
};

const Headings = ({ headings }) => (
    <ul className="list-unstyled">
        {headings.map((heading) => (
            <li key={heading.id}>
                <a href={`#${heading.id}`} className="a-nodec">
                    - {heading.title}
                </a>
                {heading.items.length > 0 && (
                    <ul className="list-unstyled">
                        {heading.items.map((child) => (
                            <li key={child.id}>
                                <a href={`#${child.id}`} className="a-nodec fs-6 fw-normal">
                                    &nbsp;&nbsp;&nbsp;&nbsp;| {child.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                )}
            </li>
        ))}
    </ul>
);

export default function TableOfContents() {
    const { nestedHeadings } = useHeadingsData();

    return (
        <>
            <nav id="tableOfContents">
                <Headings headings={nestedHeadings} />
                <a href="#" id="backToTop" className="button-big fs-6 py-1 px-2">
                    Back to Top&nbsp;&nbsp;
                    <FontAwesomeIcon icon={faCircleArrowUp} />
                </a>
            </nav>

        </>
    );
}
