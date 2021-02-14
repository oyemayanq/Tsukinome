function navigation() {
  const nav = `<nav class="nav">
    <h1 class="logo">Mayank Mishra</h1>
    <div class="nav-toggler">
        <div></div>
        <div></div>
        <div></div>
    </div>
    <div class="collapse">
    <ul class="nav-list">
        <div class="dropdown">
        <li class="nav-items dropdown-head">Tools</li>
        <div class="dropdown-menu">
            <a href="./converter.html" class="dropdown-items">Infix to postfix</a>
            <a href="#" class="dropdown-items">Bracket validator</a>
        </div>
        </div>
        <li class="nav-items">Contact</li>
    </ul>
    </div>
</nav>`;
  return nav;
}
