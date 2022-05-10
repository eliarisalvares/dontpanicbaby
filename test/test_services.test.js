const {verifyRules} = require('../src/services.js')

describe('GameRules', () => {
	it('has to be 6 characters long and must return a size error', async () => {
		const str = "41+1"

		await expect(verifyRules(str)).rejects.toThrow(Error);
		await expect(verifyRules(str)).rejects.toThrow('Invalid length');
	})

	it('has to have 6 valid characters', async () => {
		const str = "41 + 1"
		
		await expect(verifyRules(str)).rejects.toThrow(Error);
		await expect(verifyRules(str)).rejects.toThrow('Invalid input');
	})

	it('it has 6 characters and has to give an error because it doesnt result in 42', async () => {
		const str = "42+1+1"
		
		await expect(verifyRules(str)).rejects.toThrow(Error);
		await expect(verifyRules(str)).rejects.toThrow('Invalid input');
	})

	it('test with the correct equation', async () => {
		const str = "8*9-30"
		const res = await verifyRules(str)
		
		expect(res).toBe("CCCCCC")
	})

	it('it has 6 characters and has to return XTXXXX', async () => {
		const str = "40+1+1"
		const res = await verifyRules(str)

		expect(res).toBe("XTXXXX")
	})

	it('it has 6 characters and has to return XXXXTX', async () => {
		const str = "42+1-1"
		const res = await verifyRules(str)

		expect(res).toBe("XXXXTX")
	})

	it('it has 6 characters and has to return XTXXTC', async () => {
		const str = "40+2-0"
		const res = await verifyRules(str)

		expect(res).toBe("XTXXTC")
	})

	it('it has 6 characters and has to return CXXXCC', async () => {
		const str = "8+4+30"
		const res = await verifyRules(str)

		expect(res).toBe("CXXXCC")
	})
})