function showscroll() {
    document.body.style.overflow = 'scroll';
}


function makeList() {
    // Establish the array which acts as a data source for the list
    let listData = [
        '',
'Prefer to use the shower, not always a bath.',
'When brushing your teeth, close the tap!',
'Use a watering can to water the plants.',
'Use a bucket to clean the floors.',
'When soaping in the shower, close the shower tap',
'Use the washing machine fully loaded, not half full.',
'Prefer to use a dishwasher to do the dishes!',
'When doing dishes by hand, don’t let the water running from the tap.',
'Use a bucket and sponge to clean the car!',
'Use the correct water saving button on the toilet!',
'When drinking water, try to use our drinking fountain',
'When you drink from the tap, close the tap when done!',
'Water the plants in the playground with a watering can.',
'Don’t play too much with water in the summer.',
'We should try to reuse our rainwater.',
'When you drink water from a glass only take as much as you need',
'Use the water you saved to drink for later.',
'Double check that the faucet is completely off when leaving the bathroom.',
'Don’t go to the bathroom unless you need to go.',
'Fix broken toilets and leaky faucets.',
'Take short showers.',
'Shut off the water while you are rinsing the dishes.',
'Use the garbage disposal sparingly. Instead, compost vegetable food waste and save gallons every time.',
'Install an instant water heater near your kitchen sink so you don’t have to run the water while it heats up. This also reduces energy costs.',
'Toilet leaks can be silent! Be sure to test your toilet for leaks at least once a year.',
'Use good old soap instead of shower gels for bathing. Gels require extra water for rinse off',
'Put food coloring in your toilet tank. If it seeps into the bowl without flushing, there’s a leak. Fix it and start saving gallons.',
'If your toilet flapper doesn’t close properly after flushing, replace it.',
'Use a showerhead. They’re inexpensive, easy to install, and can save you up to 750 gallons a month.',
'Consider buying a dual-flush toilet. It has two flush options: a half-flush for liquid waste and a full-flush for solid waste.',
'When washing your hands, turn the water off while you lather.',
'Install water-saving aerators on all of your faucets.',
'Drop tissues in the trash instead of flushing them and save water every time.',
'One drip every second adds up to five gallons per day! Check your faucets and showerheads for leaks.',
'Monitor your water bill for unusually high use. Your bill and water meter are tools that can help you discover leaks.',
'Learn how to use your water meter to check for leaks.',
'Grab a wrench and fix that leaky faucet. It’s simple, inexpensive, and you can save 140 gallons a week.',
'See a leak you can’t fix? Tell a parent, teacher, employer, or property manager, or call a handyman.',
'Adjust the lawn mower to the height of 1.5 to 2 inches. Taller grass shades roots and holds soil moisture better than short grass.',
'Aerate your lawn periodically. Holes every six inches will allow water to reach the roots, rather than run off the surface.',
'Avoid overseeding your lawn with winter grass.',
'While fertilizers promote plant growth, they also increase water consumption. Apply the minimum amount of fertilizer needed.',
'Water your summer lawns once every three days and your winter lawn once every five days.',
'Use a broom instead of a hose to clean patios, sidewalks and driveways, and save water every time.',
'Water coolers require a seasonal maintenance check. For more efficient cooling, check your evaporative cooler annually.',
'If you have a cooler, direct the water drain to plants in your landscape.',
'Water audit your facility to find out your recommended water use, then monitor your utility bills to gauge your monthly consumption.',
'Look into water recycling option at home and school',
'Use Rainwater harvesting techniques',
'Avoid pouring out water from your drinking glass down the drain',
'Take a shower for 5 minutes maximum.',
'Turn off the tap while washing your hands.',
'Fix your leaks. Eg: Check for leaks in faucets or pipes.',
'Close the tap while you’re brushing your teeth.',
'Make your own cycle of water in your house.',
'Instead of using sprinters dig holes on the yard where you can have a little pond and use the water from there to water the lawn.',
'Use the dishwasher or clothes washer only in full loads.',
'Use a broom, not a hose, to clean driveways and sidewalks.',
'Do not let the faucet run while you clean vegetables.',
'Never pour water down the drain when there may be another use for it. Use it to water your indoor plants or garden.',
'Rinse your razor in the sink.',
'Don’t use the toilet as an ashtray or wastebasket.',
'Add organic matter and use efficient watering systems for shrubs, flower beds and lawns.',
'Use buckets instead of a hose to wash your car.',
'Put plastic bottles or float booster in your toilet tank.',
'Keep a bottle of drinking water in the fridge.',
'Put a layer of mulch around trees and plants.',
'Water during the early parts of the day; avoid watering when it’s windy.',
'Install water-saving shower heads and low-flow faucet aerators.',
'Minimize use of kitchen sink garbage disposal units.',
'Plant drought-resistant lawns, shrubs and plants.',
'Re-use your pasta cooking liquid',
'Shrink your lawn',
'Avoid flushing the toilet too many times',
'Water your lawn only when you need to',
'Use water-friendly equipments.',
'Avoid bottled water.',
'Water your plants wisely.',
'Harvest with rain water.',
'Avoid leaky outdoor water hoses, faucet dripping in the kitchen or in the bathroom',
'Do not water dry lands.',
'Try to donÕt play water games: try not using water guns nor water balloons too.',
'Try not to use the hose the day after it rained.',
'Read the house water meter before and after a two-hour period when no water is being used. If the meter does not read exactly the same, there is a leak.',
'Check your toilets for leaks',
'Close the tab when you are washing the dishes',
'Use the water carefully because in the world, the water is going to end some day.',
'Avoid taking a loooooong shower or taking a bath with too much water',
'To reduce water use in the hool, consider replacing old equipment such as dishwashers with energy-saving devices.',
'Avoid using a shower head that disperses too much water',
'Replace faucets and sinks with WaterSense equipment',
'Avoid throwing away a water bottle with water in it',
'Install water aerators and automatic shut-off devices on faucets.',
'Plant in the spring and fall, when the watering requirements are lower.',
'Do not forget to close the tap while you go to sleep',
'Bring a water bottle to school. At the end of the day, any leftover water can be poured onto the garden.',
'Bring water cans instead from drinking from the sprue.',
'Do less laundry.',
'Install a water meter.',
'Avoid running sprinklers when it’s raining, windy or in the middle of the day (water will evaporate)'
    ],
    // Make a container element for the list
    listContainer = document.createElement('div'),
    // Make the list
    listElement = document.createElement('ul'),
    // Set up a loop that goes through the items in listItems one at a time
    numberOfListItems = listData.length,
    listItem,
    i;

    


    // Add it to the page
    document.getElementsByTagName('body')[0].appendChild(listContainer);
    
    listContainer.appendChild(listElement);

    for (i = 1; i < numberOfListItems; ++i) {
        // create an item for each one
        listItem = document.createElement('ul');
        
        // Add the item text
        listItem.innerHTML =i + ". " + " " + listData[i].fontcolor("darkgreen").fontsize("4");
     
        // Add listItem to the listElement
        listElement.appendChild(listItem);
    }
    
}