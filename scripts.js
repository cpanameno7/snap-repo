/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */
// all data are stored in objects
const phillyRecipe = {
    name: "Philly Cheesesteak Recipe",
    image: "https://www.seriouseats.com/thmb/KQ2CJ7GiZciIhELpn9--_dQqjVw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230530-SEA-PhillyCheesesteak-AmandaSuarez-49-2f3fb63d50ac43a5a1bc8366ab64cdde.jpg",
    ingredients: "1 pound (454 g) boneless rib eye steak or skirt steak or store-bought pre-sliced rib eye<br></br>1 tablespoon (15 ml) vegetable oil or other neutral oil<br></br>1/2 medium yellow onion (4 ounces; 114 g), cut into 1/4-inch dice<br></br>8 thin slices provolone cheese (about 6 ounces; 160 g), 4 slices torn into 1-inch pieces and 4 slices left whole<br></br>2 tablespoons grated Parmigiano-Reggiano cheese (optional)<br></br>1 teaspoon Diamond Crystal kosher salt; for table salt use half as much by volume<br></br>1/8 teaspoon freshly ground black pepper<br></br>Two 7- to 8-inch-long Italian hoagie/sub rolls, split lengthwise, but left attached on 1 side to create a hinge<br></br>",
    directions: " If using a whole steak, trim and cut steak crosswise with grain into roughly 3-inch wide sections, then set on large plate and freeze until firm but not frozen solid, about 1 hour. If using pre-sliced steak, skip to chopping instructions in Step 2.<br></br>2. Using a sharp knife, shave steak as thin as possible on a biased angle against the grain. Mound shaved meat on cutting board and chop coarse with knife, about 5 times for store-bought sliced meat or 10 times for hand-sliced.<br></br>3. Heat an empty 12-inch cast-iron skillet over medium-high heat for 5 minutes. Add oil to skillet and heat until just smoking. Add meat and onion in an even layer and cook, without stirring, until well browned on one side, 4 to 6 minutes. Continue to cook, stirring frequently to move and pull apart the meat slices until meat and onions are browned and meat is no longer pink, 2 to 4 minutes. <br></br>4. Stir in torn provolone cheese, Parmesan cheese (if using), salt, and pepper. Cook, stirring constantly, until cheese is melted and well combined, 1 to 2 minutes. Turn off heat.  Divide mixture into 2 individual portions the length of the rolls. Shingle 2 slices of Provolone cheese over each portion. Cover and let cheese melt, about 1 minute.<br></br>5. Center rolls, cut sides down, over each portion of meat. Working with one at a time, use a large spatula to scoop under each portion of meat and flip meat into roll to create a filled sandwich. Serve immediately."
}

const appleCrispRecipe = {
    name: "Grill-Baked Skillet Apple Crisp Recipe",
    image: "https://www.seriouseats.com/thmb/PAqRQyqrbLj-KLHYojWZzrmJJ1Q=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230802-SEA-GrillBakeAppleCrisp-LorenaMasso-22-f65723e3227648a3a002519a2c468369.jpg",
    ingredients: "For the Topping:<br></br>3/4 cup whole wheat flour (3 1/3 ounces; 95 g)<br></br>3/4 cup finely chopped pecans or walnuts (3 ounces; 85 g)<br></br>3/4 cup old fashioned rolled oats (2 3/4 ounce; 75 g)<br></br>3/4 cup packed light brown sugar (4 3/4 ounces; 135 g)<br></br>1/2 teaspoon ground cinnamon<br></br>1 teaspoon Diamond Crystal kosher salt; for table salt use half as much by volume<br></br>8 tablespoons melted butter (4 ounces; 115 g)<br></br>For the Filling:<br></br>3 pounds Golden Delicious apples (about 8 apples), peeled, cored, and halved <br></br>4 tablespoons unsalted butter, divided (2 ounces; 56 g)<br></br>1/4 cup light brown sugar (about 1 1/2 ounces; 40 g)<br></br>1 tablespoon cornstarch<br></br>1 tablespoon (15 ml) fresh lemon juice<br></br>1/4 teaspoon ground cinnamon<br></br>1/4 teaspoon Diamond Crystal kosher salt; for table salt use half as much by volume",
    directions: "1. For the Topping: Combine flour, pecans, oats, sugar, cinnamon, and salt in a medium bowl. Stir in melted butter until mixture is thoroughly moistened and crumbly.<br></br>2. For a Charcoal Grill: Open bottom vent completely. Light chimney starter filled with charcoal briquettes (6 quarts). Once top coals are partially covered with ash, pour into a steeply banked pile against 1 side of the grill. Set cooking grate in place, cover, and open lid vent. Heat until grill is hot (500°F; 260°C), about 5 minutes.<br></br>3. For a Gas Grill: Turn all burners to high, cover, and heat grill until hot (500°F; 260°C), about 15 minutes. Leave primary burner on high and turn off other burner(s); (see notes)<br></br>4. For the Filling: Clean and oil cooking grate. Brush cut sides of apples with 2 tablespoons melted butter. Arrange apples, buttered side down, on hotter side of grill and cook (covered if using gas) until grill marks develop and apples begin to soften, 3 to 7 minutes; move apples as needed to ensure even cooking. Transfer to cutting board; let cool slightly, about 5 minutes.<br></br>5. Slice apple halves into 1/2-inch-thick wedges and transfer to a bowl. Toss apple slices with sugar, cornstarch, lemon juice, cinnamon, salt, and remaining 2 tablespoon melted butter until combined. Transfer apple mixture to a 10-inch cast-iron skillet and spread into an even layer. Sprinkle topping evenly over the filling, breaking up any large clumps with your fingers.<br></br>6. Transfer the skillet to the cooler side of grill, cover grill, and bake, rotating skillet halfway through baking, until apple filling is bubbly and tender and topping is golden brown, 20 to 40 minutes. (For a gas grill, adjust the primary burner as needed while baking to maintain grill temperature between 400 to 450°F; if using a 3-or-more–burner grill, adjust primary burner and second burner, leaving other burners off.) Transfer the skillet to a wire rack and let cool for at least 15 minutes before serving."
}

const millBreadRecipe = {
    name:"Millionaire's Shortbread", 
    image:"https://www.seriouseats.com/thmb/UipPm2URKwlQ6UiXRlTwbqdfWuY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20240910-SEA-MillionairesShortbread-AmandaSuarez-hero-6e6073a8deb64b4faacd6d68c755599a.jpg",
    ingredients:"For the Shortbread:<br></br>Nonstick cooking spray<br></br>170g all-purpose flour (6 ounces; 1 1/3 cups)<br></br>75g rice flour or cornstarch (2 3/4 ounces; 2/3 cup)<br></br>56g golden caster, caster, or superfine sugar (2 ounces; about 1/4 cup plus 2 teaspoons)<br></br>1/4 teaspoon Diamond Crystal kosher salt; for table salt, use half as much by volume<br></br>150g unsalted butter (5 1/4 ounces; 11 tablespoons), melted<br></br><br></br>For the Butterscotch:<br></br>170g unsalted butter (6 ounces; 12 tablespoons)<br></br>450g dark brown sugar (about 15 3/4 ounces; about 2 cups plus 2 tablespoons)<br></br>1 1/2 cups (355ml) heavy cream<br></br>2 teaspoons Diamond Crystal kosher salt; for table salt, use half as much by volume<br></br><br></br>For the Topping:<br></br>198g dark chocolate (7 ounces; about 1 1/4 cups), between 64 and 70% cacao, coarsely chopped<br></br>1 tablespoon (14g) unsalted butter<br></br>Flaky sea salt, to garnish<br></br>",
    directions: "1. For the Shortbread: Adjust oven rack to middle position and preheat oven to 350ºF (175ºC). Line a 9- by 13-inch rimmed baking sheet with an 11- by 17-inch piece of parchment crosswise so the parchment overhangs the rim of the baking sheet by at least 2 inches. (If using pre-cut parchment, you may have to layer two pieces to create the overhang.) Using nonstick cooking spray, grease parchment and baking sheet; set aside.<br></br>2. In a large bowl, whisk together all-purpose flour, rice flour or cornstarch, sugar, and salt. Pour melted butter into flour mixture and, using a rubber spatula or dough scraper, incorporate butter into dry ingredients, gently stirring and pressing to combine, until a cohesive dough just forms and no dry bits remain, about 1 minute. (Be careful not to overwork the dough.)<br></br>3. Scrape dough into the prepared baking sheet and, using an offset spatula or the flat bottom of a glass or measuring cup, press dough into an even layer. Bake until fragrant and light golden, about 30 minutes. Remove shortbread from oven and set on wire rack to cool to room temperature, about 30 minutes.<br></br>4. For the Butterscotch: In a 6-quart pot, melt butter over medium heat. Whisk in brown sugar and salt cook, stirring occasionally, until sugar has melted and begins to bubble, about 5 minutes. Add heavy cream (it will bubble and sputter) and whisk until a loose sauce forms. Bring to a boil over high heat and cook, stirring occasionally, until sauce is thick, shiny, and registers 235ºF (113ºC) on an instant-read thermometer. Remove from heat and allow butterscotch to slightly cool, about 5 minutes. (It should no longer be scorching hot and still be warm enough to pour.)<br></br>5. Carefully pour butterscotch over cooled shortbread. Allow butterscotch to sit until warm room temperature, another 30 minutes, then refrigerate uncovered until just set, about 1 hour. Transfer baking sheet to freezer while you prepare the chocolate topping, at least 10 minutes and up to 1 hour.<br></br>6. For the Topping: In a medium heat-proof mixing bowl, combine dark chocolate and butter. Set it over a saucepan of simmering water, making sure the bottom of the bowl doesn't touch the water, and heat, stirring occasionally, until chocolate and butter have melted and mixture is homogenous, about 3 minutes. Remove bowl and set on a heatproof work surface. (Alternatively: In a medium microwave-safe bowl, heat dark chocolate and butter on medium-low power, stopping and using a heat-proof flexible spatula to stir every 30 seconds, until completely melted, about 3 minutes.)<br></br>7. Remove shortbread from freezer and pour chocolate over shortbread, using an offset spatula to evenly coat butterscotch. Refrigerate until set, about 30 minutes.<br></br>8. Lift parchment overhang to gently remove millionaire’s shortbread from rimmed baking sheet and transfer to a cutting board. Using a sharp knife, cut bars into squares, rectangles, or desired shape. Serve cold or at room temperature.<br></br>"
}

const strawSmoothie = {
    name: "Strawberry Banana Smoothie",
    image: "https://www.seriouseats.com/thmb/H43fbqC8K7pFTzWirh6Asyh1-HI=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230508-SEA-StrawberryBananaMilkshake-AmandaSuarez-09-8273565fd3964265b09c271cbd2daea2.jpg",
    ingredients: "1 1/2 cups frozen strawberries (10 ounces; 290 g)<br></br>1 1/2 cups (355 ml) whole milk <br></br>1 ripe banana<br></br>1 tablespoon strawberry jam (1 ounce; 25 g)<br></br>",
    directions: "1. Combine frozen strawberries, milk, banana, and strawberry jam in a blender. Pulse a few times to break up the fruit, then blend on high speed until completely smooth, about 1 minute."
}

const soubise = {
    name: "Soubise (French Onion Sauce)",
    image: "https://www.seriouseats.com/thmb/ryYn5EbyHFg88Z7LxeTwrEkGDVY=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2015__03__20150316-soubise-onion-sauce-roast-chicken-daniel-gritzer-07-c68a878c6bd84f5e8f47ac2a57e44a67.jpg",
    ingredients: "2 tablespoons unsalted butter<br></br>2 medium onions, thinly sliced<br></br>Kosher salt<br></br>1 1/2 cups heavy cream<br></br>1 teaspoon curry powder or Vadouvan spice, optional (see note)<br></br>Ground white pepper, to taste<br></br>",
    directions: "1. In a medium saucepan, melt 2 tablespoons butter over medium heat until foaming. Add onions along with a large pinch of salt and cook, stirring frequently, until softened and most liquid has evaporated, about 20 minutes. Stir in cream and simmer for 5 minutes.<br></br>2. Transfer hot onions and cream to a blender. Add curry powder or Vadouvan if using, and blend, starting at low speed and gradually increasing to high, until a smooth sauce forms. If desired, pass sauce through a fine-mesh strainer, pressing on solids with a spoon, for an even more refined texture. Return onion sauce to saucepan and season with salt and white pepper (note that sauce should have a texture that's thicker than most sauces but thinner than a puree). Keep warm.<br></br>"
}

const microPoachedEgg = {
    name: "Perfect Microwave Poached Eggs",
    image: "https://www.seriouseats.com/thmb/AmL0VZMTNr7Dhe7v3ChLQDxYLEA=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20240422-SEA-MicrowavePoachedEggs-AmandaSuarez-09-7f6a11eb1fdc48c0b249d0c84754d0ba.jpg",
    ingredients: "1 cup (240ml) water<br></br>1 teaspoon (5ml) vinegar, such as rice vinegar, white wine vinegar, or apple cider vinegar<br></br>1 teaspoon Diamond Crystal kosher salt; for table salt, use half as much by volume<br></br>1 large egg, cracked into a small bowl or ramekin<br></br>",
    directions: "1. In a small microwave-safe bowl, whisk water, rice vinegar, and salt until well-combined. Place bowl in microwave and heat water at 100% power in 1 minute intervals until 209 to 212ºF (98 to 100ºC), about 4 minutes total.<br></br>2. Using oven mitts or a kitchen towel, carefully remove bowl from microwave and gently slip the egg into water. Return bowl to microwave and cook at 80% power until the whites are fully set but yolks are still soft, about 1 minute and 20 seconds.<br></br>3. While eggs are cooking, place a paper towel on a plate; set aside.<br></br>4. Using a slotted spoon, carefully lift egg from bowl, allowing any excess liquid to drip back into the bowl. Transfer to paper-towel lined plate and, using a paring knife or scissors, trim whites if desired. Serve immediately.<br></br>"
}

const galinhadaMineira = {
    name: "Galinhada Mineira (Brazilian Chicken & Rice) Recipe",
    image: "https://www.seriouseats.com/thmb/E7ZZPzJLwCxf59mtT4xaM-p7yHk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230310-SEA-Galinhada-Mineira-AmandaSuarez-hero-46f95e560435475e8ccdaf5a3001ed46.JPG",
    ingredients: "2 cups (473ml) homemade chicken stock or low-sodium broth or water<br></br>2 teaspoons (6g) Diamond Crystal kosher salt (for table salt, use half as much by volume or the same weight), plus more as needed<br></br>2 1/2 pounds (1.1kg) chicken pieces, such as drumsticks and/or thighs<br></br>Freshly ground black pepper<br></br>1/4 cup (60ml) canola or other neutral oil<br></br>1/2 teaspoon turmeric (optional)<br></br>2 teaspoons annatto powder<br></br>1 teaspoon sweet paprika<br></br>5 medium cloves garlic, very finely minced or pureed<br></br>1 large carrot (about 9 ounces; 255g), diced<br></br>1 medium yellow onion (about 8 ounces; 227g), diced<br></br>2 cups parboiled rice (11 ounces; 310g), washed with cold water and drained well<br></br>5 ounces frozen peas (half of one 10-ounce/284g bag), optional<br></br>5 ounces frozen corn (half of one 10-ounce/284g bag), optional<br></br>1/2 cup thinly sliced scallion greens, dark and light green parts only (from about 6 scallions)<br></br>",
    directions: "1. In a large measuring cup, combine stock and the 2 teaspoons salt and stir until salt is dissolved. Set aside.<br></br>2. Season chicken all over with salt and pepper. In a 5- or 6-quart Dutch oven, heat oil over medium-high heat until shimmering. Add chicken and cook, turning occasionally, until very well browned, about 10 minutes. Lower heat, stir in turmeric (if using), annatto, and paprika, followed by garlic, carrot, and onion. Season with salt, then cook, stirring and scraping any browned bits from bottom of pot, until softened, about 5 minutes.<br></br>3. Stir in rice and cook until thoroughly coated in oil and seasoning and heated through, about 2 minutes. Add stock along with frozen peas and corn (if using), scraping down sides of pot to ensure all rice grains are submerged. Bring to a boil, then cover, reduce heat to low, and cook until liquid is absorbed and rice is just tender, about 25 minutes (or following cooking time on rice package directions).<br></br>4. Remove from heat, stir in scallions, then let stand, covered, 10 minutes. Serve.<br></br>"
} 

const chocolateMoose = {
    name: "Chocolate Mousse Recipe",
    image: "https://www.seriouseats.com/thmb/n2kzAeICHAnHNmmz6ck0MgwWR4s=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230217-Chocolate-Mousse-AmandaSuarez-hero-c88c2ce9afde47d09a8b9d8d57e4434c.jpg",
    ingredients: "7 ounces (198g) 70% chocolate<br></br>3/4 cup (180ml) heavy cream<br></br>3 large eggs (150g), separated<br></br>1/2 teaspoon Diamond Crystal kosher salt; for table salt, use half as much by volume<br></br>1/4 teaspoon espresso powder<br></br>1/8 teaspoon cream of tartar<br></br>1/4 cup (50g) granulated sugar<br></br>Whipped cream, for serving (optional)<br></br>",
    directions: "1. Place 4 cups of water in a 3-quart saucepan and bring to a gentle simmer over medium heat. In a stainless-steel mixing bowl large enough to nest in the saucepan without touching the water, combine chocolate and heavy cream, set it over the saucepan, and, stirring occasionally with a silicone spatula, cook until the chocolate has melted. Stir until homogenous, then remove the bowl from the saucepan and set on a heatproof work surface.<br></br>2. Whisk the 3 egg yolks into the chocolate-cream mixture until well combined (the chocolate mixture should be warm to the touch, but not hot). Set aside.<br></br>3. Meanwhile, in a the bowl of a stand mixer fitted with the whisk attachment, combine egg whites, kosher salt, espresso powder, and cream of tartar. Whisk on medium speed until egg whites begin to foam, then, with mixer continuing to run at medium speed, slowly and steadily pour in the sugar. Continue to whisk until meringue is glossy and reaches medium-stiff peaks, about 8 minutes. Set aside.<br></br>4. Add one-quarter of the meringue to the chocolate mixture and fold until thoroughly combined. Add remaining meringue and gently fold until meringue is almost entirely incorporated.<br></br>5. Fill eight 6-ounce ramekins, individual cups, or a 2-quart baking dish with the mousse and refrigerate until the mousse has set, at least 4 hours and up to 5 days. Serve, topping mousse with dollops of whipped cream, if desired.<br></br>"
}

const shakeSauce = {
    name: "Shake Shack Sauce Recipe",
    image: "https://www.seriouseats.com/thmb/igg-tqAUi9lDElqqp3BRd7n7gEc=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20210531-ShakeShackBurgers-134-77169f870dfd45c4899ff1acd2f973db.jpg",
    ingredients: "1/2 cup (120 ml) mayonnaise<br></br>1 tablespoon (15 ml) ketchup<br></br>1 tablespoon (15 ml) yellow mustard<br></br>4 slices kosher dill pickle, finely chopped<br></br>1/4 teaspoon garlic powder<br></br>1/4 teaspoon paprika<br></br>Pinch cayenne pepper<br></br>",
    directions: "1. Combine all ingredients in a countertop blender jar and blend on high until smooth, scraping down sides of blender with rubber spatula as necessary, 30 seconds to 1 minute. Transfer sauce to an airtight container and refrigerate until ready to use (sauce can be refrigerated for up to 5 days)."
}

const vinaigrette = {
    name: "Lemon Vinaigrette Recipe (Quick and Easy)",
    image: "https://www.seriouseats.com/thmb/KK6I6YcmParxNnZWODbdBpSmYlg=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20240212-SEA-LemonVinaigrette-JenCauseyhero-e827f65cc13545be981626ef7f52db3d.jpg",
    ingredients: "2 tablespoons (30 ml) fresh lemon juice, plus 1 teaspoon lemon zest, from 1 medium lemon<br></br>1 1/2 teaspoons dijon mustard<br></br>1 1/2 teaspoons honey<br></br>1 medium clove garlic, grated (about 1/2 teaspoon)<br></br>2 tablespoons finely chopped shallot (3/4 ounce; 21 g), from 1 medium shallot<br></br>1/4 teaspoon Diamond Crystal kosher salt; for table salt, use half as much by volume<br></br>1/4 cup (60 ml) extra-virgin olive oil<br></br>",
    directions: "1. In a large nonreactive bowl, whisk together lemon juice, lemon zest, mustard, honey, garlic, shallot, and salt. Slowly stream in olive oil, whisking vigorously and constantly, until emulsified and creamy. Alternately, place all ingredients in a jar, seal tightly, and shake until emulsified. If not serving immediately, pour into a small nonreactive container or jar; cover and refrigerate for up to 1 month."
}

const taco = {
    name: "Homemade Taco Seasoning Recipe",
    image: "https://www.seriouseats.com/thmb/ks-q27o8Lgsw1Gtl_sGSKnoLl8w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230724-SEA-TacoSeasoning-AmandaSuarez-006-74b9b8e438a84d0d9283c89df89a25a2.jpg",
    ingredients: "1 tablespoon ancho chile powder<br></br>1 teaspoon cornstarch (optional)<br></br>1 teaspoon Diamond Crystal kosher salt; for table salt, use half as much by volume<br></br>1 teaspoon dried oregano<br></br>1 teaspoon garlic powder<br></br>1 teaspoon ground cumin<br></br>1 teaspoon sugar<br></br>1/2 teaspoon black pepper<br></br>1/2 teaspoon cayenne<br></br>1/2 teaspoon onion powder<br></br>1/2 teaspoon sweet Hungarian-style paprika<br></br>1/2 teaspoon smoked paprika<br></br>1/4 teaspoon ground coriander<br></br>1/8 teaspoon ground cloves<br></br>",
    directions: "1. In a small bowl, thoroughly stir together all ingredients. Transfer to an airtight container and store in a cool, dry, dark place for up to 2 months."
}

const mayoTuna = {
    name: "Classic Mayo-Dressed Tuna Salad Sandwiches Recipe",
    image: "https://www.seriouseats.com/thmb/nNzqiB3HHZruV4cEZMjAfMFQOsQ=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/20230822-SEA-classic-tuna-salad-sandwich-recipe-hero-02-Qi-Ai-2bfb755449e749c7aab432d0e3b0062b.jpg",
    ingredients: "1 medium red onion (about 8 ounces; 225 g), cut into 1/4-inch dice<br></br>1/2 cup (120 ml) red wine vinegar<br></br>4 (5-ounce; 140 g) cans oil-packed tuna, drained<br></br>1 cup (240 ml) mayonnaise, plus more as needed<br></br>2 stalks celery (about 6 ounces; 170 g total), cut into 1/4-inch dice<br></br>1 ounce (about 10 stalks) flat-leaf parsley leaves and tender stems, minced (about 1/4 packed cup)<br></br>1/2 teaspoon (3 g) Asian fish sauce or very finely minced oil-packed anchovy fillets (about 2 small fillets)<br></br>Kosher salt and freshly ground black pepper<br></br>8 slices sandwich bread, very lightly toasted<br></br>Romaine lettuce leaves, torn, for garnish<br></br><br></br><br></br>",
    directions: "1. In a small bowl, combine onion and vinegar (vinegar should just cover onion; add more if it does not) and let stand 15 minutes.<br></br>2. Meanwhile, in a medium bowl, combine tuna and mayonnaise and mix very well with a spoon until tuna is reduced to very small shreds.<br></br>3. Drain onion well, then add to tuna along with celery, parsley, and fish sauce or anchovy. Mix until well incorporated, then season with salt and pepper. Add more mayo, 1 tablespoon at a time, if desired.<br></br>4. Spoon tuna salad onto 4 bread slices, top with lettuce leaves, then close sandwiches. Serve right away.<br></br>"
}

const frenchOnion = {
    name: "Real French Onion Dip Recipe",
    image: "https://www.seriouseats.com/thmb/SChGFkADgSHWJOdn2zZiGhh2Mb8=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/Real-French-Onion-Dip-Hero-1-00395-VictorProtasio_1-54bd73e5cd1b430e869c31a8e2cdf759.JPG",
    ingredients: "2 teaspoons sugar<br></br>3 large yellow onions (1 1/2 pounds; 680 g), finely diced<br></br>1 tablespoon (15 g) unsalted butter<br></br>1 teaspoon Diamond Crystal kosher salt, plus more as needed; for table salt, use half as much by volume<br></br>1/2 teaspoon freshly ground black pepper<br></br>1/2 cup (120 ml) water<br></br>3/4 cup sour cream<br></br>1/2 cup mayonnaise<br></br>1 teaspoon lemon juice<br></br>1/2 teaspoon Worcestershire sauce<br></br>1/2 ounce (15 g) finely grated Parmesan cheese<br></br>1 tablespoon finely sliced chives<br></br>",
    directions: "1. Heat sugar in a 12-inch stainless-steel skillet over medium-high heat until completely melted and light brown, about 3 minutes. Immediately add onions and stir with wooden spoon to coat onions in sugar. Add butter, salt, and black pepper. Stir  to combine. Cook, shaking pan occasionally until onions release all their liquid and brown coating builds up on bottom of pan, 6 to 8 minutes.<br></br>2. Add 2 tablespoons water shake pan while scraping with wooden spoon to deglaze brown bits from bottom of pan. Continue cooking, shaking occasionally until coating begins to build up again, about every 2 minutes. Repeat deglazing and cooking steps three more times until all water is used up and onions are deep brown. Transfer to medium mixing bowl and allow to cool at room temperature for 10 minutes.<br></br>3. Add sour cream, mayonnaise, lemon juice, parmesan, and Worcestershire and whisk to combine. For a smoother texture, run through blender or food processor for 1 minute until smooth. Chill in a sealed container for at least 1 hour and up to 5 days (flavor will improve with time). Spoon into a bowl, sprinkle with chives, and serve with potato chips.<br></br>"
}

const tomatoSoup = {
    name: "15-Minute Creamy Tomato Soup (Vegan)",
    image: "https://www.seriouseats.com/thmb/FGHzHtgyqTgm40uDXuVYEzA-qYk=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/15-minute-creamy-tomato-soup-vegan-recipe-hero-01_1-19875e4289354e5c981c96189f707c62.JPG",
    ingredients: "1/2 cup extra-virgin olive oil, divided<br></br>2 cloves garlic, grated on a microplane grater<br></br>1 small onion, finely sliced (about 1 cup)<br></br>1 teaspoon dried oregano<br></br>1/2 teaspoon red pepper flakes<br></br>2 slices white bread, crusts removed, torn into rough 1/2-inch pieces<br></br>2 (28-ounce) cans whole peeled tomatoes packed in juice<br></br>Kosher salt and freshly ground black pepper<br></br>Minced chives, basil, or parsley as garnish<br></br>Toasted bread or grilled cheese for serving<br></br>",
    directions: "1. Heat 2 tablespoons olive oil in a large saucepan over medium-high heat until shimmering. Add garlic, onions, oregano, and red pepper flakes. Cook, stirring frequently until onions are softened but not browned, about 4 minutes. Add bread and tomatoes. Roughly mash tomatoes with a whisk or a potato masher. Add 2 cups water. Bring to a boil over high heat, then reduce to a simmer. Cook for 5 minutes.<br></br>2. Transfer half of the soup to the jar of a blender. Blend soup, starting at low speed and gradually increasing to high. With blender running on high, gradually trickle in half of remaining olive oil. Season soup to taste with salt and pepper. Transfer to a large bowl and repeat with remaining half of soup and olive oil. Ladle into individual serving bowls, top with minced herbs, drizzle with more olive oil, and serve with toast or grilled cheese.<br></br>"
}

//array of recipes
let recipes = [phillyRecipe, appleCrispRecipe, millBreadRecipe, strawSmoothie, soubise, microPoachedEgg,
    galinhadaMineira, chocolateMoose, shakeSauce, vinaigrette, taco, mayoTuna, frenchOnion, tomatoSoup];


function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

    recipes.forEach((recipe) => {
        const card = templateCard.cloneNode(true);
        card.style.display = "block";

        card.querySelector("h2").textContent = recipe.name;
        card.querySelector("img").src = recipe.image;
        card.querySelector("img").alt = recipe.name;

        // attach recipe-specific info to the button
        const button = card.querySelector("button");
        button.addEventListener('click', function () {
            showRecipe(recipe);
        });
        cardContainer.appendChild(card);
    });
}

function editCardContent(card, newTitle, newImageURL) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Poster";

}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function openRandomRecipe() {
    let random = Math.floor(Math.random() * recipes.length - 1) + 1 ;
    showRecipe(recipes[random]);
}

function showRecipe(recipe) {
    const recipeArea = document.getElementById("recipe-area");

    const messageHTML = `
    <h3>${recipe.name}</h3>
    <strong>Ingredients:</strong><br>${recipe.ingredients}<br><br>
    <strong>Directions:</strong><br>${recipe.directions}`;

    recipeArea.innerHTML = messageHTML;
    recipeArea.style.display = "block";
}

function orderAlphabetical() {
    //selection sort
    let temp;
    for (let i = 0; i < recipes.length; i++) {
        let index = i;
        let smallest = recipes[i].name.charAt(0);
        for (let j = i; j < recipes.length; j++) {
            if (recipes[j].name.charAt(0) < smallest) {
                smallest = recipes[j].name.charAt(0);
                index = j;
            }
        }
        //swap
        temp = recipes[i];
        recipes[i] = recipes[index];
        recipes[index] = temp;
    }

    showCards();
}

function showAll() {
    recipes = [phillyRecipe, appleCrispRecipe, millBreadRecipe, strawSmoothie, soubise, microPoachedEgg,
        galinhadaMineira, chocolateMoose, shakeSauce, vinaigrette, taco, mayoTuna, frenchOnion, tomatoSoup];
    showCards();
}

function showMeals() {
    recipes = [phillyRecipe, galinhadaMineira, mayoTuna, tomatoSoup, microPoachedEgg];
    showCards();
  
}

function showSweets(){
    recipes = [appleCrispRecipe, millBreadRecipe, strawSmoothie, chocolateMoose];
    showCards();
}

function showSauce() {
    recipes = [soubise, shakeSauce, vinaigrette, taco, frenchOnion];
    showCards();
} 


