export function linkResolver(document) {
    if (document.type === "post") {
        return "/post/" + document.uid;
    }

    return "/";
}
