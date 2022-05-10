
async function verifyRules(str){
	if (str.length !== 6)
		throw new Error('Invalid length')
	for (var i = 0; i < str.length; i++)
	{
		if (!((str[i] >= '/' && str[i] <= '9') || str[i] === '+' || str[i] === '-' || str[i] === '*'))
		{
			throw new Error('Invalid input')
		}
	}
	if (eval(str) !== 42)
		throw new Error('Invalid input')
	else
	{
		const correctFunction = "8*9-30"
		if (correctFunction === str)
			return ("CCCCCC")
		else
		{
			var res = "";
			for (i = 0; i < str.length; i++)
			{
				for (var j = 0; j < correctFunction.length; j++)
				{
					if(str[i] == correctFunction[j] && res.length <= i)
					{	
						if (i == j)
							res = res.concat("C")
						else
							res = res.concat("T")
					}
				}
				if (res.length <= i)
					res = res.concat("X")
			}
			return (res)
		}
	}
}

module.exports = {verifyRules}