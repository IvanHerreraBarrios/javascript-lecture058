const $whatisDom = document.getElementById("what-is")

let text = `
<p>
    The document Object Model (<b><i>DOM - DOCUMENT OBJECT MODEL</i></b>) is an API for HTML and XML documents.
</p>
<p>
    This provides a structural presentation of the document , allowing the content and visual presentation to be modified using JS code
</p>
<p>
    <mark>
        The DOM is not part of the Javascript Specification, it is an API for broswers
    </mark>
</p>`

$whatisDom.innerText = text //Explorer, tags what?, old
//COntent its standar

$whatisDom.textContent = text //only text

$whatisDom.innerHTML = text //only html //insert
$whatisDom.outherHTML = text //only html //remove and insert