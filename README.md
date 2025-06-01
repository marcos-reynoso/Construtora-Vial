# Construtora-Vial

A management system for machinery, works, and PDF reporting for a construction company.

---

## Requirements

- PHP >= 8.1
- Composer
- Node.js >= 18.x and npm >= 9.x
- MySQL or MariaDB
- [Optional] XAMPP/LAMPP for local development

---

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/marcos-reynoso/Construtora-Vial.git
cd construtora-vial
```

### 2. Install PHP dependencies

```bash
composer install
```

### 3. Install JavaScript dependencies

```bash
npm install
```

### 4. Copy and configure the environment file

```bash
cp .env.example .env
```

Edit `.env` and set your database and other environment variables.

### 5. Generate the application key

```bash
php artisan key:generate
```

### 6. Run migrations and seeders

```bash
php artisan migrate
php artisan db:seed
```

### 7. Start the development servers

To run both the Laravel backend and Vite frontend together, use:

```bash
npm run dev
```

This will start both `php artisan serve` and `vite` concurrently.

Visit [http://127.0.0.1:8000] in your browser.

---

## Main Features

- Manage machines, works, provinces, brands, and types.
- Assign machines to works.
- Monthly PDF reports for provinces, works, and machines (using dompdf).
- Machine search with autocomplete.
- Dashboard with quick access to reports and search.

---

## Credits

- Laravel
- Inertia.js
- React
- DomPDF (barryvdh/laravel-dompdf)

---

## License

MIT
