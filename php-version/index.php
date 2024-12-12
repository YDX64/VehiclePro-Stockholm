<?php
$recipients = [
    ['name' => 'Maskiner/Entreprenad', 'email' => 'arne@sthfordonmaskin.se'],
    ['name' => 'Personbilar/Sportbilar', 'email' => 'anders@sthfordonmaskin.se'],
    ['name' => 'Husbilar/Husvagnar', 'email' => 'peter@sthfordonmaskin.se'],
    ['name' => 'Försäljning Bilar', 'email' => 'robert@sthfordonmaskin.se']
];

$contactCards = [
    [
        'title' => 'Maskiner/Entreprenad',
        'name' => 'Arne',
        'phone' => '0720-314833',
        'email' => 'arne@sthfordonmaskin.se'
    ],
    [
        'title' => 'Personbilar/Sportbilar',
        'name' => 'Anders',
        'phone' => '0728-430692',
        'email' => 'anders@sthfordonmaskin.se'
    ],
    [
        'title' => 'Husbilar/Husvagnar',
        'name' => 'Peter',
        'phone' => '0707-795548',
        'email' => 'peter@sthfordonmaskin.se'
    ],
    [
        'title' => 'Försäljning Bilar',
        'name' => 'Robert Gustafsson',
        'phone' => '0737-291549',
        'email' => 'robert@sthfordonmaskin.se'
    ]
];

$services = [
    [
        'title' => 'Maskiner/Entreprenad',
        'description' => 'Vi specialiserar oss på alla typer av entreprenadmaskiner och utrustning. Vår expertis omfattar grävmaskiner, lastmaskiner, dumpers och andra tunga maskiner för byggbranschen.',
        'image' => 'https://images.unsplash.com/photo-1599707254554-027aeb4deacd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    [
        'title' => 'Personbilar/Sportbilar',
        'description' => 'Från lyxiga personbilar till exklusiva sportbilar, vi har expertisen för att hantera högpresterande fordon och erbjuder professionell värdering och förmedling.',
        'image' => 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    [
        'title' => 'Försäljning Bilar',
        'description' => 'Vi erbjuder professionell bilförsäljning med personlig service. Kontakta Robert Gustafsson på 0737-291549 eller robert@sthfordonmaskin.se för mer information.',
        'image' => 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ],
    [
        'title' => 'Husbilar/Husvagnar',
        'description' => 'Vi är specialister på husbilar och husvagnar av alla storlekar och märken. Vi hjälper dig hitta det perfekta fritidsfordonet för dina behov.

Vi åtar oss förmedlingsuppdrag. Att som privatperson sälja en husbil/husvagn kan både var krångligt, jobbigt och tidskrävande. Låt oss ta hand om er försäljning så ni slipper hantera tröttsama telefonsamtal, oseriösa köpare, långa provkörningar, prutare och ansträngande förhandlingar.

Här följer flera starka skäl att anlita oss:

• Som handlare får vi ut betydligt mer för ditt objekt än vad du får privat. Genom våra kontakter, vår kundkrets samt annonser på de största annonssajterna bytbil.se och blocket.se kommer ditt objekt att synas för köpare i hela landet.

• Vi tar fullt ansvar för försäljningen. Du som säljare behöver inte bekymra dig om fordonet går sönder efter ett kort tag då vi lämnar garanti på alla fordon vi säljer.

• Vi ordnar även med finansieringsupplägg till köparen. När säljfinansiering kan erbjudas ökar sannolikheten att fler spekulanter visar intresse.

• Du slipper de vemödor och undviker de fallgropar som det kan innebära att sälja ditt fordon privat.

• Vi säljer majoriteten av våra förmedlingsuppdrag inom 30 dagar.',
        'image' => 'https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80'
    ]
];

// Form işleme
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';
    $recipient = $_POST['recipient'] ?? '';

    // E-posta gönderme işlemi burada yapılacak
    // mail($recipient, "Ny kontakt från webbplatsen", $message, "From: $email");
}
?>

<!DOCTYPE html>
<html lang="sv">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Stockholm Fordon och Byggentreprenad AB</title>
    <meta name="description" content="Vi är specialister på försäljning och förmedling av entreprenadmaskiner, personbilar, sportbilar, husbilar och husvagnar i Stockholm.">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        'swedish-blue': '#006AA7',
                        'swedish-yellow': '#FECC00',
                    },
                }
            }
        }
    </script>
    <style>
        html {
            scroll-behavior: smooth;
        }
        .fade-in {
            animation: fadeIn 0.8s ease-in;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>
</head>
<body class="min-h-screen bg-white">
    <!-- Navbar -->
    <nav class="bg-swedish-blue/95 backdrop-blur-sm sticky top-0 z-50 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between h-16">
                <div class="flex-shrink-0 flex items-center">
                    <div class="flex items-center space-x-2">
                        <div class="w-10 h-10 bg-swedish-yellow rounded-full flex items-center justify-center">
                            <span class="text-swedish-blue font-bold text-xl">SF</span>
                        </div>
                        <h1 class="text-xl font-bold text-white whitespace-nowrap">
                            Stockholm Fordon
                        </h1>
                    </div>
                </div>
                <div class="hidden sm:flex sm:items-center sm:space-x-8">
                    <a href="#tjanster" class="text-white hover:text-swedish-yellow transition-colors">Tjänster</a>
                    <a href="#kontakt" class="text-white hover:text-swedish-yellow transition-colors">Kontakt</a>
                </div>
            </div>
        </div>
    </nav>

    <!-- Hero -->
    <div class="relative bg-swedish-blue overflow-hidden">
        <div class="absolute inset-0">
            <img
                src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                class="w-full h-full object-cover object-center opacity-20"
                alt="Luxury car background"
            >
            <div class="absolute inset-0 bg-gradient-to-b from-swedish-blue/80 to-swedish-blue/60"></div>
        </div>
        <div class="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <div class="text-center fade-in">
                <h1 class="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl whitespace-nowrap">
                    Stockholm Fordon och <span class="text-swedish-yellow">Byggentreprenad AB</span>
                </h1>
                <p class="mt-6 max-w-2xl mx-auto text-xl text-gray-300">
                    Vi har många års erfarenhet inom branschen. Vi köper, byter, säljer samt förmedlar alla slags fordon.
                </p>
                <div class="mt-8">
                    <a
                        href="#kontakt"
                        class="inline-flex items-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-swedish-blue bg-swedish-yellow hover:bg-swedish-yellow/90 transform transition-all hover:scale-105 hover:shadow-lg"
                    >
                        Kontakta oss
                    </a>
                </div>
            </div>
        </div>
    </div>

    <!-- Services -->
    <div id="tjanster" class="py-24 bg-white">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="lg:text-center mb-16 fade-in">
                <h2 class="text-3xl font-extrabold text-swedish-blue">Våra tjänster</h2>
            </div>

            <div class="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <?php foreach ($services as $service): ?>
                <div class="relative group fade-in">
                    <div class="relative h-64 w-full overflow-hidden rounded-lg">
                        <img
                            src="<?= htmlspecialchars($service['image']) ?>"
                            alt="<?= htmlspecialchars($service['title']) ?>"
                            class="h-full w-full object-cover object-center transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                        >
                        <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black/60"></div>
                    </div>
                    <div class="relative bg-white p-6 -mt-12 mx-4 rounded-lg shadow-lg">
                        <h3 class="text-xl font-bold text-gray-900 mt-2 mb-4"><?= htmlspecialchars($service['title']) ?></h3>
                        <div class="text-gray-600 whitespace-pre-line"><?= nl2br(htmlspecialchars($service['description'])) ?></div>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>

    <!-- Contact -->
    <div id="kontakt" class="bg-gray-50 py-24">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 fade-in">
                <h2 class="text-4xl font-extrabold text-swedish-blue">Kontakta oss</h2>
                <p class="mt-4 text-xl text-gray-600">Vi är här för att hjälpa dig med alla dina fordonsbehov</p>
            </div>
            
            <div class="grid lg:grid-cols-2 gap-12">
                <!-- Contact Info -->
                <div class="space-y-8 fade-in">
                    <?php foreach ($contactCards as $card): ?>
                    <div class="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div class="flex items-center space-x-4 mb-6">
                            <svg class="h-8 w-8 text-swedish-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                            </svg>
                            <div>
                                <h3 class="text-xl font-semibold"><?= htmlspecialchars($card['title']) ?></h3>
                                <p class="text-lg text-gray-600"><?= htmlspecialchars($card['name']) ?>: <?= htmlspecialchars($card['phone']) ?></p>
                                <p class="text-lg text-gray-600"><?= htmlspecialchars($card['email']) ?></p>
                            </div>
                        </div>
                    </div>
                    <?php endforeach; ?>
                </div>

                <!-- Contact Form -->
                <div class="bg-white rounded-xl shadow-lg p-8 fade-in">
                    <form method="POST" class="space-y-6">
                        <div>
                            <label for="recipient" class="block text-lg font-medium text-gray-700 mb-2">
                                Välj avdelning
                            </label>
                            <select
                                id="recipient"
                                name="recipient"
                                class="w-full px-4 py-3 text-lg rounded-lg border-gray-300 shadow-sm focus:border-swedish-blue focus:ring-swedish-blue"
                                required
                            >
                                <?php foreach ($recipients as $recipient): ?>
                                <option value="<?= htmlspecialchars($recipient['email']) ?>">
                                    <?= htmlspecialchars($recipient['name']) ?>
                                </option>
                                <?php endforeach; ?>
                            </select>
                        </div>

                        <div>
                            <label for="name" class="block text-lg font-medium text-gray-700 mb-2">
                                Namn
                            </label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                class="w-full px-4 py-3 text-lg rounded-lg border-gray-300 shadow-sm focus:border-swedish-blue focus:ring-swedish-blue"
                                required
                            >
                        </div>

                        <div>
                            <label for="email" class="block text-lg font-medium text-gray-700 mb-2">
                                E-post
                            </label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                class="w-full px-4 py-3 text-lg rounded-lg border-gray-300 shadow-sm focus:border-swedish-blue focus:ring-swedish-blue"
                                required
                            >
                        </div>

                        <div>
                            <label for="phone" class="block text-lg font-medium text-gray-700 mb-2">
                                Telefon
                            </label>
                            <input
                                type="tel"
                                name="phone"
                                id="phone"
                                class="w-full px-4 py-3 text-lg rounded-lg border-gray-300 shadow-sm focus:border-swedish-blue focus:ring-swedish-blue"
                                required
                            >
                        </div>

                        <div>
                            <label for="message" class="block text-lg font-medium text-gray-700 mb-2">
                                Meddelande
                            </label>
                            <textarea
                                name="message"
                                id="message"
                                rows="4"
                                class="w-full px-4 py-3 text-lg rounded-lg border-gray-300 shadow-sm focus:border-swedish-blue focus:ring-swedish-blue"
                                required
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            class="w-full flex items-center justify-center space-x-2 px-8 py-4 bg-swedish-blue text-white text-lg font-medium rounded-lg hover:bg-swedish-blue/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-swedish-blue transition-colors duration-200"
                        >
                            <span>Skicka meddelande</span>
                            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer class="bg-gray-900">
        <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
            <p class="text-center text-gray-400 text-sm">
                © <?= date('Y') ?> Stockholm Fordon och Byggentreprenad AB. Alla rättigheter förbehållna.
            </p>
        </div>
    </footer>
</body>
</html> 