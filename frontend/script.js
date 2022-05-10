function moveToNext(field, autoMove) {
	aux = document.getElementById(field)
	if (aux.value.length >= aux.maxLength)
		document.getElementById(autoMove).focus()
}

async function getForm(){
	const obj = { str: "" }
	obj.str = obj.str.concat(document.getElementById("value1").value)
	obj.str = obj.str.concat(document.getElementById("value2").value)
	obj.str = obj.str.concat(document.getElementById("value3").value)
	obj.str = obj.str.concat(document.getElementById("value4").value)
	obj.str = obj.str.concat(document.getElementById("value5").value)
	obj.str = obj.str.concat(document.getElementById("value6").value)
	const body = JSON.stringify(obj);
	let result = await fetch('http://localhost:3333/', {
		method: 'POST',
		body: body,
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json'
		}
	})
	if(result.status === 200)
		showResponse(await result.json())
}

function showResponse(jsonObject)
{
	const inputs = ["res1","res2","res3","res4", "res5", "res6"]

	for(var i = 0; i < 6; i++)
	{
		document.getElementById(inputs[i]).value = jsonObject.response.slice(i,i + 1)
		if(jsonObject.response.slice(i,i + 1) === 'C')
			document.getElementById(inputs[i]).style = "background-color: #538d4e;"
		if(jsonObject.response.slice(i,i + 1) === 'X')
			document.getElementById(inputs[i]).style = "background-color: #8D4E53;"
		if(jsonObject.response.slice(i,i + 1) === 'T')
			document.getElementById(inputs[i]).style = "background-color: #b59f3b;"
	}
}
