module.exports = [
	// Haymaker reset
,    {
        type: 'Reset',
        skills: 61131, 
        message: '{icon} reset!'
    },
	
	// Power buff
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 31020,
		message: '{icon} up'
	},
	
	// Ult buff
	{
        type: 'Expiring',
		target: 'Self',
        abnormalities: 10153210, 
        message: '{icon} {duration}',
		time_remaining: [1,2]
    },
	
	// endurance debuff
	{
		type: 'MissingDuringCombat',
		target: 'MyBoss',
		abnormalities: [200302, 101200, 101210, 10153140],
		message: 'Missing Jackhammer',
		rewarn_timeout: 3
	},
	
	// 100% crit buff
	{
		type: 'Added',
		target: 'Self',
		abnormalities: 89210100,
		message: '{icon} up'
	},
]
