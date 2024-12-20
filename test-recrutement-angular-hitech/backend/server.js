const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let expenses = [
	{ id: 1, nature: 'trip', amount: 100, date: '2021-01-01', distance: 100 },
];
let currentId = 1;

// Validation function
function validateExpense(expense) {
	if (
		!expense.nature ||
		(expense.nature !== 'trip' && expense.nature !== 'restaurant')
	) {
		return 'Invalid nature. Must be "trip" or "restaurant"';
	}
	if (!expense.amount || expense.amount <= 0) {
		return 'Amount must be a positive number';
	}
	if (!expense.date || !/^\d{4}-\d{2}-\d{2}$/.test(expense.date)) {
		return 'Invalid date format. Must be yyyy-mm-dd';
	}
	if (
		expense.nature === 'trip' &&
		(!expense.distance || expense.distance <= 0)
	) {
		return 'Distance must be a positive integer for trips';
	}
	if (
		expense.nature === 'restaurant' &&
		(expense.guests == null || expense.guests < 0)
	) {
		return 'Guests must be a non-negative integer for restaurants';
	}
	return null;
}

// Get all expenses
app.get('/api/expenses', (req, res) => {
	res.json(expenses);
});

// Add a new expense
app.post('/api/expenses', (req, res) => {
	const error = validateExpense(req.body);
	if (error) {
		return res.status(400).json({ error });
	}

	const newExpense = {
		id: currentId++,
		...req.body,
	};

	expenses.push(newExpense);
	res.status(201).json(newExpense);
});

// Update an expense
app.put('/api/expenses/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const expense = expenses.find((e) => e.id === id);

	if (!expense) {
		return res.status(404).json({ error: 'Expense not found' });
	}

	const error = validateExpense(req.body);
	if (error) {
		return res.status(400).json({ error });
	}

	Object.assign(expense, req.body);
	res.json(expense);
});

// Delete an expense
app.delete('/api/expenses/:id', (req, res) => {
	const id = parseInt(req.params.id);
	const index = expenses.findIndex((e) => e.id === id);

	if (index === -1) {
		return res.status(404).json({ error: 'Expense not found' });
	}

	expenses.splice(index, 1);
	res.status(204).send();
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
