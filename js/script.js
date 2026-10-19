// Step 1: Find the gallery container.
const gallery = document.getElementById('tree-gallery');

// Step 2: Build one card for each tree.
trees.forEach(function(tree) {
    // Step 3: Create the card.
    const treeDiv = document.createElement('div');
    treeDiv.className = 'tree';

    // Step 4: Add the name.
    const treeName = document.createElement('h2');
    treeName.textContent = tree.name;
    treeDiv.appendChild(treeName);

    // Step 5: Add the image.
    const treeImage = document.createElement('img');
    treeImage.src = tree.imagePath;
    treeImage.alt = tree.name;
    treeDiv.appendChild(treeImage);

    // Step 6: Add the description.
    const treeDescription = document.createElement('p');
    treeDescription.textContent = `Description: ${tree.description}`;
    treeDiv.appendChild(treeDescription);

    // Step 7: Add the link.
    const treeLink = document.createElement('a');
    treeLink.href = tree.link;
    treeLink.textContent = 'Learn More';
    treeDiv.appendChild(treeLink);

    // Step 8: Put the finished card into the gallery.
    gallery.appendChild(treeDiv);
});
