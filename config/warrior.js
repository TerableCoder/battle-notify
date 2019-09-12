module.exports = [
	// Missing stance
	{
		type: 'MissingDuringCombat',
		target: 'Self',
		abnormalities: [100100, 100101, 100102, 100103, 100200, 100201, 100202, 100203],
		message: 'Missing Stance',
		rewarn_timeout: 10
	},


	// Blade Draw Reset
	{
		type: 'Reset',
		skills: [290100, 370100], // normal & deadly gamble version of blade draw
		message: '{icon} Reset'
	},
	
		//Traverse buff expiring
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: [101300,101301], 
        message: '{icon}T-cut {duration} ',
		time_remaining: [5, 2, 1]
    },
	
/*		//dg expiring
	{
        type: 'Expiring',
		skills: 200100
        abnormalities: [100800,100801], 
        message: '{icon} up in {duration} ',
		time_remaining: [16, 5]
    },
*/
	
]
