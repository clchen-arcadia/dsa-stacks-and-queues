Pseudo code for a back and forth browser implementation.

Design how you could design a browser back/forward system using two stacks, so that you can visit a series of sites (Google, Yahoo, EBay, go back to Yahoo, then forward again to EBay, then onto Apple, and so on).

Write pseudo-code for this.

imagine all browser history as being...

(bottom of back stack) a, b, c, ..., g (current page), ... x, y, z. (bottom of forward stack)

We will have two stacks to track this browser history

One stack for backPages
And one stack for forwardPages


For new browser session...

Each clicking of a new page. Adds to the top of stack backPages.

When clicking back button... you pop off the top of stack backPages, access its URL and go to that page.
At that time, also add to top of stack forwardPages, the page you clicked the back button on. You can keep going with the back button, and repeating this pattern.
If you click the forward button during such a pattern/session. The reverse pattern will occur: Pop off the top of forwardPages stack, and go to that URL, and write the current page to the top of the stack of backPages.

If you click on a different link or go to a different page during a "going back" session... the forwardPages stack is deleted, and you start "normal browsing mode" again.

------START PSEUDO CODE ---------


class Browser {
    this.backPages = new Stack();
    this.forwardPages = new Stack();
    this.currentPage;

    function backButton() {
        forwardPages.push(this.currentPage);
        const URL = backPages.pop().url;
        goToURL(URL);
    }

    function forwardButton() {
        backPages.push(this.currentPage);
        const URL = forwardPages.pop().url;
        goToURL(URL);
    }

    function clickToNewPage (newURL) {
        if ( forwardPages.size !== 0 ) forwardPages.empty();
        backPages.push(this.currentPage);
        goToURL(newURL);
    }
}
