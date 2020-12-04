import React, { Component } from "react";
import logo from "../logo.svg";
import { Link, animateScroll as scroll } from "react-scroll";
import { Tabs, Tab,  NavDropdown, Nav, Form, Button, FormControl, Card, Container, Col, Row } from 'react-bootstrap';

class Recipes extends Component {
  render() {
    return (
      <div className="section section-recipes" id="recipes">
        <div className="section-content " >
        <Container className="justify-content-md-center recipes-container " as="div" >
        <h1 className="text-light">Recipes</h1>


<Tab.Container id="left-tabs-example"  className="bg-white  shadow-sm" defaultActiveKey="tikka-masala" >
  <Row className="align-content-center no-gutters recipes-row" as="div">
    <Col sm={12} md={3} className="m-0 recipe-pill-col">
      <Nav variant="pills" as="div" className=" m-0 flex-column justify-content-md-center align-content-center text-left rounded-sm">
      <Nav.Item  className="nav-item-pill">
        <Nav.Link activeClass="active-pill" eventKey="tikka-masala" className="recipe-pill rounded-0">Mom's Tofu Tikka Masala</Nav.Link>
      </Nav.Item >
        <Nav.Item className="nav-item-pill">
          <Nav.Link activeClassName="active-pill"  eventKey="cookies" className=" recipe-pill  rounded-0">Vegan Cookie Brownies</Nav.Link>
        </Nav.Item >
        <Nav.Item className="nav-item-pill">
          <Nav.Link  activeClassName="active-pill" eventKey="sp-gnocchi" className="recipe-pill  rounded-0 ">Sweet Potato Gnocchi</Nav.Link>
        </Nav.Item>
      </Nav>
    </Col>
    <Col sm={9} className="ml-0 full-height recipe-box-col" as="div">
      <Tab.Content className="pl-0 ml-0 recipe-box-col" defaultActiveKey="tikka-masala">
        <Tab.Pane className="full-height" eventKey="cookies" title="Vegan Cookie Brownies">
        <Card className="text-left recipe-card full-height">
          <Card.Body className="m-4 ">
            <Card.Title>Vegan Cookie Brownies</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">Cookie? Brownie? Both.</Card.Subtitle>
          <Card.Text className="text-dark">
          <br/>
            <h6 className="bold" id="ingredients"><b>Brownie Batter Ingredients</b></h6>
            <ul>
            <li>2 cups all-purpose flour</li>
            <li>2 cups white sugar (granulated or unrefined cane sugar)</li>
            <li>3/4 cups unsweetened cocoa powder (used @ghirardelli )</li>
            <li>1 teaspoon baking powder</li>
            <li>1 teaspoon salt</li>
            <li>1 cup bananas (ripe, mashed)</li>
            <li>1/4 cup unsweetened soy milk (or almond milk)</li>
            <li>1/4 cup canola oil</li>
            <li>1 teaspoon vanilla extract</li>
            <li>1 cup dark dairy-free chocolate chips</li>
            </ul>

            <h6 className="bold"><b>Cookie Sheet Ingredients</b></h6>
            <ul>
            <li>2 cups all-purpose flour</li>
            <li>1 teaspoon baking powder</li>
            <li>1 teaspoon baking soda</li>
            <li>1/2 teaspoon fine salt</li>
            <li>1/2 cup cane sugar</li>
            <li>1/2 cup dark brown sugar</li>
            <li>1/2 cup olive oil</li>
            <li>1/2 cup almond milk</li>
            <li>1 1/4 cups dark chocolate chips</li>
            </ul>

            <br/>
              <h6 className="bold" id="steps"><b>Steps</b></h6>
              <ol>
              <li>To first make the cookie sheet, whisk together the flour, baking powder, baking soda, and salt for the cookies.</li>
              <li>In a separate bowl, mix the appropriate cookie-recipe amounts of cane sugar, brown sugar, olive oil, and almond milk until well-combined.</li>
              <li>Mix the wet and dry ingredients together.</li>
              <li>Roll out the entire cookie dough ball to be a slab slightly longer and wider than the bottom of the 9x13 pan. Then, place the slab on a separate sheet, and store in the freezer.</li>
              <li>Pre-heat oven to 350 degrees Fahrenheit. Cover the bottom with a 9x13 brownie pan with parchment paper or oil with coconut oil or vegan butter.</li>
              <li>Mash 1 cup of bananas to begin the brownie batter</li>
              <li>Mix the mashed bananas, soy milk, canola oil, vanilla extract, and white sugar</li>
              <li>In a separate bowl, whisk together the flour, sugar, baking powder, and salt</li>
              <li>Combine the dry and wet ingredients. Add small amounts at a time of more flour if too wet, or more milk if too thick.</li>
              <li>Stir in dairy-free chocolate chips <i>Obviously, my favorite part</i></li>
              <li>Pour brownie batter into prepped 9x13 pan. Bake brownies at 350F for 25 minutes, until just slightly under-baked.</li>
              <li>Remove brownies from the oven and put the cookie dough slab on top of the brownies! Spread with hands to ensure full coverage - don't let any brownies peek :)</li>
              <li>Return pan to the oven and bake for 10-15 more minutes, or until cookie layer has become golden brown. Test whether the brownies are ready by sticking a clean fork or toothpick straight into the cookie & brownies and seeing if there is leftover uncooked dough on the fork. <i>It's so chocolatey good that you might hit melty chocolate instead of actual uncooked dough so be sure to check.</i></li>
              <li>Enjoy! If you'd like, melt 3/4 cup of dark chocolate with 2-3 tbsp of coconut oil for 15 seconds at time in microwave, stirring each time until it becomes extremely liquid-y! Then, drizzle chocolate on top of your cooled cookie brownie bars to your heart’s delight</li>
              </ol>
              <Link
                className="nav-link-recipe"
                activeClass="active"
                to="recipes"
                offset={-50}>Go back to the top of the recipe</Link>
          </Card.Text>
        </Card.Body>
          </Card>
        </Tab.Pane>

        <Tab.Pane eventKey="tikka-masala" title="Mom's Tofu Tikka Masala" >
        <Card className="text-left full-height" as="div">
          <Card.Body className="m-4">
            <Card.Title>Mom's Tofu Tikka Masala</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">My go-to happy meal. Warm, rich curry with tofu blocks that make the perfect paneer substitute.</Card.Subtitle>
          <Card.Text className="text-dark">
          <br/>
            <h6 className="bold" id="ingredients"><b>Ingredients</b></h6>
            <ul>
            <li>14 oz extra firm tofu</li>
            <li>5 tablespoons of coconut oil, vegan butter (<i>or non-vegan butter</i>)</li>
            <li>4-5 cloves of minced garlic</li>
            <li>1 white onion, diced</li>
            <li>2 teaspoons coriander</li>
            <li>2 teaspoons cumin</li>
            <li>2 teaspoons turmeric</li>
            <li>2 teaspoons garam masala</li>
            <li>2 teaspoons curry powder</li>
            <li>2 teaspoons chili powder</li>
            <li>1 tablespoons tomato paste</li>
            <li>15 oz can of tomato purée</li>
            <li>15 oz can of full-fat coconut milk, <i>refrigerated overnight</i></li>
            <li>Salt, to taste</li>
            <li>Sugar, to taste</li>
            </ul>

            <br/>
              <h6 className="bold" id="steps"><b>Steps</b></h6>
              <ol>
              <li>Press-dry tofu for 30 minutes by covering with dry rags then topping with a baking sheet with heavy objects on top (I used a cast iron). </li>
              <li>Heat 2 to 3 tablespoons of coconut oil (or butter or vegan butter) til shimmering in a large pan.</li>
              <li>Add minced garlic and diced onion, cook until fragrant (2-3 mins).</li>
              <li>Add coriander powder, cumin powder, turmeric powder, garam masala, curry powder, 1 spoon of chili powder, 1 table spoon of tomato paste, and a pinch of salt. Continue to cook until spices are very fragrant, about 5-7 minutes.</li>
              <li>Add full 15 oz can of tomato purée and simmer on medium heat for 5-10 minutes, stirring occasionally.</li>
              <li>Once the tomato sauce, spices, and onions are fragrant and well cooked - add the canned full-fat coconut milk (if non-vegan, use cream). Stir and let simmer while covered for 10 to 15 mins.<i>Note: it will definitely splatter at this stage. Proceed with caution!</i> </li>
              <li><i>Optional step to get slightly firmer tofu: </i>While that is cooking, cut the dried tofu into 1-inch blocks (could also use paneer, cottage cheese, chicken) in a spoon of oil. Then, add to to the sauce.</li>
              <li>Add salt and sugar to taste. <i>My mom swears by the bit of sugar, it really matters!</i></li>
              <li>Top with cilantro, serve with rice, naan, roti, or even on greens</li>

              </ol>
              <Link
                className="nav-link-recipe"
                activeClass="active"
                to="recipes"
                offset={-50}>Go back to the top of the recipe</Link>
          </Card.Text>
        </Card.Body>
          </Card>
        </Tab.Pane>

        <Tab.Pane eventKey="sp-gnocchi" title="Sweet Potato Gnocchi" >
        <Card className="text-left">
          <Card.Body className="m-4">
            <Card.Title>Sweet Potato Gnocchi</Card.Title>
           <Card.Subtitle className="mb-2 text-muted">Coming Soon</Card.Subtitle>
          <Card.Text className="text-dark">
          <br/>


          </Card.Text>
        </Card.Body>
          </Card>
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>

</Container>


        </div>
      </div>
    );
  }
}


export default Recipes;
