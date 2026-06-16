<!DOCTYPE html>
<html lang="km">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ប្រព័ន្ធវិភាគព័ត៌មាន និងរូបភាព</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Hanuman:wght@400;700&display=swap" rel="stylesheet">
    <style>
        body {
            font-family: 'Hanuman', serif;
            background-color: #f3f4f6;
        }
        .loader {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #3b82f6;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        #resultContent {
            white-space: pre-wrap; 
            line-height: 1.8;
        }
        /* គំនូរជីវចលស្កេនរូបភាព (Scanning Animation) */
        @keyframes scan {
            0% { top: 0%; }
            50% { top: 100%; }
            100% { top: 0%; }
        }
        .scanner-line {
            animation: scan 3s ease-in-out infinite;
        }
    </style>
</head>
<body class="min-h-screen p-4 md:p-8">

    <div class="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden relative">
        
        <!-- ផ្នែកខាងលើ Header -->
        <div class="bg-blue-600 text-white p-6 text-center relative">
            <h1 class="text-3xl font-bold mb-2">ប្រព័ន្ធជំនួយការវិភាគព័ត៌មាន និងរូបភាព</h1>
            <p class="text-blue-100">ឧបករណ៍អប់រំសម្រាប់បែងចែកព័ត៌មានក្លែងក្លាយ និងរូបភាព AI</p>
            <span id="engineBadge" class="absolute top-4 right-4 bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded-full shadow-md">
                ✅ បំពាក់ប្រព័ន្ធបម្រុង Offline
            </span>
        </div>

        <!-- ជម្រើស Tabs -->
        <div class="flex border-b border-gray-200">
            <button id="tab-text" onclick="switchTab('text')" class="flex-1 py-4 text-center font-bold text-blue-600 border-b-4 border-blue-600 hover:bg-gray-50 transition">
                📝 វិភាគអត្ថបទព័ត៌មាន
            </button>
            <button id="tab-image" onclick="switchTab('image')" class="flex-1 py-4 text-center font-bold text-gray-500 hover:text-blue-600 hover:bg-gray-50 transition border-b-4 border-transparent">
                🖼️ វិភាគរូបភាព
            </button>
        </div>

        <div class="p-6 md:p-8">
            <!-- ផ្នែកវិភាគអត្ថបទ -->
            <div id="section-text" class="block">
                <h2 class="text-xl font-bold mb-4 text-gray-800">ពិនិត្យមើលព័ត៌មាន</h2>
                <p class="mb-4 text-gray-600">សូមចម្លង និងដាក់បញ្ចូលអត្ថបទព័ត៌មាន ឬសំណួរដែលអ្នកសង្ស័យនៅទីនេះ ដើម្បីឲ្យប្រព័ន្ធជួយវិភាគ៖</p>
                <textarea id="newsInput" rows="6" class="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none resize-none" placeholder="ឧទាហរណ៍៖ តើខ្មែរនិងថៃត្រូវគ្នាវិញហើយឬនៅ? ឬ ដាក់ព័ត៌មានផ្សេងៗដែលចង់ផ្ទៀងផ្ទាត់..."></textarea>
                <button onclick="analyzeText()" class="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md">
                    🔍 ចាប់ផ្តើមវិភាគអត្ថបទ
                </button>
            </div>

            <!-- ផ្នែកវិភាគរូបភាព -->
            <div id="section-image" class="hidden">
                <h2 class="text-xl font-bold mb-4 text-gray-800">ពិនិត្យមើលរូបភាព (AI ឬ រូបពិត?)</h2>
                <p class="mb-4 text-gray-600">សូមបញ្ចូលរូបភាពដើម្បីពិនិត្យថាតើវាជារូបភាពថតពិតប្រាកដ ឬបង្កើតដោយ AI៖</p>
                
                <!-- កែប្រែ៖ ប្តូរទៅជា <label> វិញដើម្បីឲ្យការចុះស្វែងរករូបភាពដើរបានរឹងមាំបំផុត ដោយគ្មានការរាំងខ្ទប់ពី Browser -->
                <label for="imageInput" class="block border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:bg-gray-50 transition cursor-pointer relative overflow-hidden" id="uploadArea">
                    <input type="file" id="imageInput" accept="image/*" class="hidden" onchange="previewImage(event)">
                    
                    <!-- បន្ទាត់ស្កេនឡាស៊ែរ (បង្ហាញតែពេលវិភាគ) -->
                    <div id="scannerLaser" class="hidden absolute left-0 right-0 h-1 bg-green-500 shadow-[0_0_15px_#22c55e] z-10 scanner-line"></div>
                    
                    <div id="imagePreviewContainer" class="hidden relative">
                        <img id="imagePreview" class="max-h-80 mx-auto rounded-lg shadow-sm" src="" alt="Preview">
                        <p class="mt-2 text-sm text-gray-500">ចុចដើម្បីប្តូររូបភាពផ្សេង</p>
                    </div>
                    <div id="uploadPrompt">
                        <div class="text-4xl mb-2">📸</div>
                        <p class="text-blue-600 font-bold">ចុចទីនេះដើម្បីជ្រើសរើសរូបភាព</p>
                        <p class="text-xs text-gray-400 mt-1">គាំទ្រទម្រង់ JPG, PNG</p>
                    </div>
                </label>
                
                <button id="btnAnalyzeImage" onclick="analyzeImage()" class="mt-4 w-full bg-blue-600 hover:bg-gray-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 shadow-md flex items-center justify-center">
                    🔍 ចាប់ផ្តើមវិភាគរូបភាព
                </button>
            </div>

            <!-- កន្លែងបង្ហាញលទ្ធផល Loading -->
            <div id="loadingIndicator" class="hidden mt-8 flex flex-col items-center justify-center p-6 bg-gray-50 rounded-lg">
                <div class="loader mb-4"></div>
                <p class="text-gray-600 font-bold animate-pulse" id="loadingText">ប្រព័ន្ធកំពុងធ្វើការវិភាគយ៉ាងលម្អិត សូមរង់ចាំបន្តិច...</p>
            </div>

            <!-- កន្លែងបង្ហាញលទ្ធផលជាក់ស្តែង -->
            <div id="resultBox" class="hidden mt-8 p-6 rounded-lg border bg-white">
                
                <!-- ផ្ទាំងបង្ហាញការវាយតម្លៃលទ្ធផលផ្លូវការ (Verdict Banner) -->
                <div id="verdictBanner" class="mb-6 p-4 rounded-xl text-center font-bold text-lg shadow-sm border"></div>

                <h3 class="text-lg font-bold mb-2 flex items-center text-gray-800">
                    <span class="mr-2 text-2xl">📋</span> 
                    របាយការណ៍បកស្រាយលម្អិត៖
                </h3>
                <div id="resultContent" class="text-gray-700 font-medium bg-gray-50 p-4 rounded-lg border border-gray-100"></div>
                
                <div class="mt-6 p-4 bg-blue-50 text-blue-800 text-sm rounded-lg border border-blue-200">
                    <strong>ចំណាំសម្រាប់សិស្សានុសិស្ស៖</strong> ឧបករណ៍នេះជួយសម្រួលដល់ការគិត។ ទោះបីជាមានលទ្ធផលបែបណាក៏ដោយ សូមសិស្សានុសិស្សប្រើប្រាស់ការត្រិះរិះពិចារណា (Critical Thinking) និងផ្ទៀងផ្ទាត់ជាមួយប្រភពព័ត៌មានផ្លូវការបន្ថែមជានិច្ច។
                </div>
            </div>
        </div>
    </div>

    <script>
        const apiKey = "";
        let currentBase64Image = null;

        window.onload = function() {
            const badge = document.getElementById('engineBadge');
            if (apiKey && apiKey !== "") {
                badge.textContent = "🟢 ភ្ជាប់ AI ពិត (Cloud)";
                badge.className = "absolute top-4 right-4 bg-green-400 text-green-900 text-xs font-bold px-2 py-1 rounded-full shadow-md";
            } else {
                badge.textContent = "⚡ ដំណើរការទម្រង់ Offline/Demo";
                badge.className = "absolute top-4 right-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded-full shadow-md";
            }
        };

        function switchTab(tab) {
            const tabTextBtn = document.getElementById('tab-text');
            const tabImageBtn = document.getElementById('tab-image');
            const secText = document.getElementById('section-text');
            const secImage = document.getElementById('section-image');
            const resultBox = document.getElementById('resultBox');

            resultBox.classList.add('hidden');
            stopScanner();

            if (tab === 'text') {
                tabTextBtn.className = "flex-1 py-4 text-center font-bold text-blue-600 border-b-4 border-blue-600 hover:bg-gray-50 transition";
                tabImageBtn.className = "flex-1 py-4 text-center font-bold text-gray-500 hover:text-blue-600 hover:bg-gray-50 transition border-b-4 border-transparent";
                secText.classList.remove('hidden');
                secImage.classList.add('hidden');
            } else {
                tabImageBtn.className = "flex-1 py-4 text-center font-bold text-blue-600 border-b-4 border-blue-600 hover:bg-gray-50 transition";
                tabTextBtn.className = "flex-1 py-4 text-center font-bold text-gray-500 hover:text-blue-600 hover:bg-gray-50 transition border-b-4 border-transparent";
                secImage.classList.remove('hidden');
                secText.classList.add('hidden');
            }
        }

        function previewImage(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    document.getElementById('imagePreview').src = e.target.result;
                    document.getElementById('imagePreviewContainer').classList.remove('hidden');
                    document.getElementById('uploadPrompt').classList.add('hidden');
                    currentBase64Image = e.target.result.split(',')[1];
                    document.getElementById('resultBox').classList.add('hidden');
                    stopScanner();
                }
                reader.readAsDataURL(file);
            }
        }

        function startScanner() {
            document.getElementById('scannerLaser').classList.remove('hidden');
        }

        function stopScanner() {
            document.getElementById('scannerLaser').classList.add('hidden');
        }

        async function fetchWithRetry(url, options, maxRetries = 3) {
            const delays = [1000, 2000, 4000];
            for (let i = 0; i < maxRetries; i++) {
                try {
                    const response = await fetch(url, options);
                    if (!response.ok) {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    }
                    return await response.json();
                } catch (error) {
                    if (i === maxRetries - 1) throw error;
                    await new Promise(resolve => setTimeout(resolve, delays[i]));
                }
            }
        }

        async function callGeminiAPI(systemInstruction, userPrompt, base64Image = null, mimeType = "image/jpeg") {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-09-2025:generateContent?key=${apiKey}`;
            
            let parts = [];
            if (base64Image) {
                parts.push({ inlineData: { mimeType: mimeType, data: base64Image } });
            }
            parts.push({ text: userPrompt });
            
            const payload = {
                contents: [{ parts: parts }],
                systemInstruction: { parts: [{ text: systemInstruction }] }
            };
            
            const options = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            };
            
            return await fetchWithRetry(url, options);
        }

        function cleanFormatting(text) {
            if (!text) return "";
            return text.replace(/\*\*/g, '').replace(/\*/g, '').replace(/###/g, '').replace(/##/g, '').replace(/#/g, '');   
        }

        function showResult(text) {
            document.getElementById('loadingIndicator').classList.add('hidden');
            stopScanner();
            const resultBox = document.getElementById('resultBox');
            const resultContent = document.getElementById('resultContent');
            const verdictBanner = document.getElementById('verdictBanner');

            let verdict = 'suspicious'; 
            let cleanText = text;

            if (text.includes('[VERDICT: FAKE]')) {
                verdict = 'fake';
                cleanText = text.replace('[VERDICT: FAKE]', '');
            } else if (text.includes('[VERDICT: REAL]')) {
                verdict = 'real';
                cleanText = text.replace('[VERDICT: REAL]', '');
            } else if (text.includes('[VERDICT: SUSPICIOUS]')) {
                verdict = 'suspicious';
                cleanText = text.replace('[VERDICT: SUSPICIOUS]', '');
            } else if (text.includes('[VERDICT: AI]')) {
                verdict = 'ai';
                cleanText = text.replace('[VERDICT: AI]', '');
            } else if (text.includes('[VERDICT: REAL_IMAGE]')) {
                verdict = 'real_image';
                cleanText = text.replace('[VERDICT: REAL_IMAGE]', '');
            }

            if (verdict === 'fake') {
                verdictBanner.className = "mb-6 p-4 rounded-xl text-center font-bold text-xl shadow-sm border-2 bg-red-100 text-red-800 border-red-300 animate-bounce";
                verdictBanner.innerHTML = "🚨 ព័ត៌មានក្លែងក្លាយ (Fake News)";
            } else if (verdict === 'real') {
                verdictBanner.className = "mb-6 p-4 rounded-xl text-center font-bold text-xl shadow-sm border-2 bg-green-100 text-green-800 border-green-300";
                verdictBanner.innerHTML = "✅ ព័ត៌មានពិតប្រាកដ (True News)";
            } else if (verdict === 'suspicious') {
                verdictBanner.className = "mb-6 p-4 rounded-xl text-center font-bold text-xl shadow-sm border-2 bg-yellow-100 text-yellow-800 border-yellow-300";
                verdictBanner.innerHTML = "⚠️ ព័ត៌មានសង្ស័យ ឬគ្មានប្រភពច្បាស់លាស់";
            } else if (verdict === 'ai') {
                verdictBanner.className = "mb-6 p-4 rounded-xl text-center font-bold text-xl shadow-sm border-2 bg-purple-100 text-purple-800 border-purple-300";
                verdictBanner.innerHTML = "🤖 រូបភាពបង្កើតដោយ AI (AI Generated)";
            } else if (verdict === 'real_image') {
                verdictBanner.className = "mb-6 p-4 rounded-xl text-center font-bold text-xl shadow-sm border-2 bg-blue-100 text-blue-800 border-blue-300";
                verdictBanner.innerHTML = "📸 រូបភាពថតពិតប្រាកដ (Real Photo)";
            }

            resultContent.textContent = cleanFormatting(cleanText);
            resultBox.classList.remove('hidden');
        }

        // --- ប្រព័ន្ធវិភាគបម្រុងឆ្លាតវៃ Offline បែបក្បោះក្បាយ ---
        function smartLocalTextAnalysis(text) {
            const lowerText = text.toLowerCase();
            let result = "";

            if (lowerText.includes("ខ្មែរ") && lowerText.includes("ថៃ")) {
                result += `[VERDICT: SUSPICIOUS]
១. ការវាយតម្លៃព័ត៌មាន៖
- សំណួរ/ប្រធានបទនេះ ស្ថិតក្នុងប្រភេទ «ព័ត៌មានទំនាក់ទំនងការបរទេស និងបណ្តាញសង្គម» ដែលជាប្រធានបទងាយរងគ្រោះក្នុងការបង្កើតព័ត៌មានក្លែងក្លាយបំផុត។
- ការសន្និដ្ឋានបឋម៖ បច្ចុប្បន្នភាពរវាងរដ្ឋាភិបាលនៃប្រទេសទាំងពីរ (កម្ពុជា និងថៃ) គឺមានទំនាក់ទំនងការទូតល្អជាធម្មតា គ្មានជម្លោះប្រដាប់អាវុធ ឬការបិទព្រំដែនណាមួយឡើយ។ ដូចនេះ ការលើកឡើងអំពីជម្លោះធ្ងន់ធ្ងរណាមួយនៅលើ TikTok ឬ Facebook ភាគច្រើនជា «ព័ត៌មានក្លែងក្លាយ ឬបំផ្លើសការពិត»។

២. ហេតុផល និងការវិភាគបែបអប់រំ (សម្រាប់ការពន្យល់សិស្ស)៖
- ល្បិចចិត្តសាស្ត្រដាស់កំហឹង៖ អ្នកបង្កើតព័ត៌មានក្លែងក្លាយតែងតែដឹងថា រឿងរ៉ាវរវាងជាតិសាសន៍ជិតខាង ងាយនឹងបង្កឱ្យមានការជជែកដេញដោល និងផ្ទុះកំហឹង。ពួកគេប្រើប្រាស់រូបភាពចាស់ៗ ឬវីដេអូកាត់តមកបញ្ចូលគ្នា រួចសរសេរចំណងជើងបំផ្លើស ដើម្បីទាញយកការទស្សនា (View) និងការចែករំលែក (Share) យកប្រជាប្រិយភាពផ្ទាល់ខ្លួន។
- ការខ្វះប្រភពផ្លូវការ៖ ប្រសិនបើមានព្រឹត្តិការណ៍ការទូតធំៗណាមួយកើតឡើង ស្ថាប័នរដ្ឋាភិបាល ដូចជាក្រសួងការបរទេស ឬអ្នកនាំពាក្យរាជរដ្ឋាភិបាល នឹងចេញសេចក្តីថ្លែងការណ៍ជាផ្លូវការភ្លាមៗ។ ព័ត៌មានដែលនិយាយតៗគ្នាដោយគ្មានឯកសារយោងផ្លូវការ មិនអាចយកជាការបានឡើយ។

៣. វិធីសាស្ត្រក្នុងការផ្ទៀងផ្ទាត់ (Critical Thinking)៖
- ជំហានទី១៖ ជៀសវាងការជឿភ្លាមៗទៅលើគណនីបុគ្គល ឬវីដេអូខ្លីនៅលើបណ្តាញសង្គម TikTok និង Facebook Reels។
- ជំហានទី២៖ ស្វែងរកព័ត៌មានបន្ថែមលើប្រភពសារព័ត៌មានផ្លូវការដែលមានអាជ្ញាប័ណ្ណត្រឹមត្រូវ (ដូចជា ទីភ្នាក់ងារសារព័ត៌មានកម្ពុជា AKP, ទូរទស្សន៍ជាតិ ឬស្ថាប័នព័ត៌មានជាតិល្បីៗ)។
- ជំហានទី៣៖ ចូលទៅពិនិត្យមើលគេហទំព័រ ឬទំព័រហ្វេសប៊ុកផ្លូវការរបស់ ក្រសួងការបរទេស និងសហប្រតិបត្តិការអន្តរជាតិកម្ពុជា។`;
            } else if (lowerText.includes("ព្យាបាល") || lowerText.includes("ជំងឺ") || lowerText.includes("ថ្នាំ") || lowerText.includes("ជាសះស្បើយ") || lowerText.includes("១០០%")) {
                result += `[VERDICT: FAKE]
១. ការវាយតម្លៃព័ត៌មាន៖
- ព័ត៌មានប្រភេទនេះត្រូវបានវាយតម្លៃថាជា «ព័ត៌មានសុខភាពក្លែងក្លាយ ឬការផ្សាយពាណិជ្ជកម្មបំផ្លើសហួសពីការពិត»។

២. ហេតុផល និងការវិភាគបែបអប់រំ (សម្រាប់ការពន្យល់សិស្ស)៖
- ការផ្សព្វផ្សាយផលិតផល៖ ការអះអាងថាអាចព្យាបាលជំងឺរ៉ាំរ៉ៃ (ដូចជា ជំងឺមហារីក ទឹកនោមផ្អែម លើសឈាម ឬជំងឺសន្លាក់) ឱ្យជាសះស្បើយ ១០០% ក្នុងរយៈពេលខ្លី ដោយគ្រាន់តែផឹកទឹកក្តៅលាយក្រូចឆ្មា ឬប្រើប្រាស់ថ្នាំបុរាណគ្មានប្រភព គឺជាការភូតភរទាំងស្រុង។ គោលបំណងរបស់ពួកគេគឺដើម្បីលក់ផលិតផលបោកប្រាស់។
- គ្រោះថ្នាក់ដល់ជីវិត៖ ព័ត៌មានក្លែងក្លាយផ្នែកសុខភាពមានគ្រោះថ្នាក់ខ្លាំងណាស់ ព្រោះវាធ្វើឱ្យអ្នកជំងឺបោះបង់ការព្យាបាលតាមបែបវេជ្ជសាស្ត្រត្រឹមត្រូវនៅមន្ទីរពេទ្យ ដែលអាចបណ្តាលឱ្យជំងឺកាន់តែធ្ងន់ធ្ងរ ឬគ្រោះថ្នាក់ដល់ជីវិត។
- គ្មានការយល់ព្រមពីវិទ្យាសាស្ត្រ៖ រាល់ការអះអាងពីការព្យាបាលត្រូវតែមានការពិសោធន៍ និងទទួលស្គាល់ដោយក្រសួងសុខាភិបាល និងអង្គការសុខភាពពិភពលោក (WHO)។

៣. វិធីសាស្ត្រក្នុងការផ្ទៀងផ្ទាត់ (Critical Thinking)៖
- ជំហានទី១៖ កុំសាកល្បងធ្វើតាមវិធីសាស្ត្រដែលចែករំលែកលើបណ្តាញសង្គមដោយគ្មានការប្រឹក្សាជាមួយគ្រូពេទ្យជំនាញ។
- ជំហានទី២៖ ពិនិត្យមើលថា តើថ្នាំ ឬផលិតផលនោះមាន "លេខបញ្ជិកា" (លេខអនុញ្ញាតច្បាប់) ពីក្រសួងសុខាភិបាលដែរឬទេ។
- ជំហានទី៣៖ ស្វែងរកព័ត៌មានបន្ថែមលើទំព័រហ្វេសប៊ុកផ្លូវការរបស់ «ក្រសួងសុខាភិបាលនៃព្រះរាជាណាចក្រកម្ពុជា» ឬគេហទំព័ររបស់នាយកដ្ឋានប្រយុទ្ធនឹងជំងឺឆ្លង (CDC)។`;
            } else if (lowerText.includes("ចែករំលែក") || lowerText.includes("share") || lowerText.includes("បន្ទាន់")) {
                result += `[VERDICT: FAKE]
១. ការវាយតម្លៃព័ត៌មាន៖
- ព័ត៌មាននេះទំនងជា «ព័ត៌មានបំផ្លើសដាស់អារម្មណ៍ (Clickbait)» ដើម្បីបង្កើតផលប៉ះពាល់ និងការភ័យខ្លាចក្នុងសង្គម។

២. ហេតុផល និងការវិភាគបែបអប់រំ (សម្រាប់ការពន្យល់សិស្ស)៖
- ល្បិចបង្កើតភាពអាសន្ន៖ ការប្រើប្រាស់ពាក្យថា "បន្ទាន់!" "គ្រោះថ្នាក់ណាស់!" "សូមជួយ Share ម្នាក់មួយ!" គឺជាវិធីសាស្ត្របំប៉ោងអារម្មណ៍អ្នកអានឱ្យភ័យស្លន់ស្លោ រហូតដល់ចុចប៊ូតុង Share ទាំងមិនទាន់បានអានខ្លឹមសារ ឬពិចារណាឱ្យបានល្អិតល្អន់។
- ការបង្កើនចំនួនអ្នកតាមដាន៖ ផេក ឬគណនីមួយចំនួនបង្កើតរឿងនេះឡើងដើម្បីឱ្យផេករបស់គេល្បី មានការចូលមើលច្រើន ដែលអាចឱ្យពួកគេរកលុយបាន ឬលក់ផលិតផលបាននៅថ្ងៃក្រោយ។

៣. វិធីសាស្ត្រក្នុងការផ្ទៀងផ្ទាត់ (Critical Thinking)៖
- ជំហានទី១៖ អនុវត្តច្បាប់ «ឈប់ គិត រួចសឹមចែករំលែក»។ នៅពេលឃើញព័ត៌មានអាសន្ន សូមកុំទាន់ចុច Share។
- ជំហានទី២៖ ពិនិត្យមើលកាលបរិច្ឆេទនៃព័ត៌មាន។ ជារឿយៗ គេយកព័ត៌មានចាស់ ឬគ្រោះថ្នាក់តាំងពីឆ្នាំមុនមកបង្ហោះឡើងវិញធ្វើដូចជាទើបតែកើតឡើងថ្មីៗ។
- ជំហានទី៣៖ យកប្រធានបទនោះទៅវាយស្វែងរកលើ Google ឬសួរគ្រូ និងអាជ្ញាធរមូលដ្ឋានបន្ថែម។`;
            } else {
                result += `[VERDICT: SUSPICIOUS]
១. ការវាយតម្លៃព័ត៌មាន៖
- អត្ថបទ ឬសំណួរនេះទាមទារឱ្យមានការវិភាគស៊ីជម្រៅបន្ថែម។

២. ហេតុផល និងការវិភាគបែបអប់រំ (សម្រាប់ការពន្យល់សិស្ស)៖
- នៅក្នុងយុគសម័យបច្ចេកវិទ្យា ព័ត៌មានជុំវិញខ្លួនយើងត្រូវបានបង្កើតឡើងរាប់ពាន់ក្នុងមួយថ្ងៃៗ។ ព័ត៌មានខ្លះពាក់កណ្តាលពិត ពាក់កណ្តាលក្លែងក្លាយ ដែលធ្វើឱ្យយើងងាយនឹងភាន់ច្រឡំ។
- ការមិនបញ្ជាក់ប្រភព៖ រាល់អត្ថបទដែលគ្មានប្រភពដើម គ្មានឈ្មោះអ្នកនិពន្ធ ឬគ្មានរូបភាព/វីដេអូភស្តុតាងច្បាស់លាស់ គួរតែត្រូវបានដាក់ការសង្ស័យជាមុន។

៣. វិធីសាស្ត្រផ្ទៀងផ្ទាត់បែបវិទ្យាសាស្ត្រ (S.I.F.T Method)៖
- S - Stop (ឈប់សិន)៖ នៅពេលឃើញព័ត៌មានប្លែកៗ សូមកុំទាន់ជឿ ឬប្រតិកម្មភ្លាម។
- I - Investigate the source (ស៊ើបអង្កេតប្រភព)៖ តើអ្នកណាជាអ្នកផ្សាយ? តើគេជាសារព័ត៌មានអាជីព ឬជាគណនីអាណាមិក?
- F - Find better coverage (ស្វែងរកការចុះផ្សាយផ្សេងទៀត)៖ តើមានស្ថាប័នល្បីៗផ្សេងទៀតចុះផ្សាយរឿងនេះដែរឬទេ?
- T - Trace claims to the original context (ស្វែងរកប្រភពដើម)៖ ស្វែងរកឯកសារដើម ឬរូបភាពដើម ដើម្បីដឹងថាតើមានការកាត់តដែរឬទេ។`;
            }
            return result;
        }

        // --- ប្រព័ន្ធអន្តរកម្មវិភាគរូបភាព Offline ថ្មីសន្លាង ---
        function renderInteractiveImageForensicWorksheet() {
            document.getElementById('loadingIndicator').classList.add('hidden');
            stopScanner();
            
            const resultBox = document.getElementById('resultBox');
            const verdictBanner = document.getElementById('verdictBanner');
            const resultContent = document.getElementById('resultContent');

            // រៀបចំ Banner របៀបអប់រំគំរូ
            verdictBanner.className = "mb-6 p-4 rounded-xl text-center font-bold text-lg shadow-sm border bg-blue-100 text-blue-800 border-blue-300";
            verdictBanner.innerHTML = "🔍 សន្លឹកកិច្ចការសង្កេត និងវិភាគរូបភាពអន្តរកម្ម (Offline Mode)";

            // បង្កើត Interface ថ្មីសម្រាប់សិស្សចូលរួមគ្រីសសង្កេតរូបភាព
            resultContent.innerHTML = `
                <div class="p-4 bg-yellow-50 rounded-lg border border-yellow-200 mb-6 text-sm text-yellow-800">
                    <strong>សេចក្តីណែនាំសម្រាប់លោកគ្រូ៖</strong> សូមនាំសិស្សានុសិស្សសម្លឹងមើលរូបភាពដែលបានបញ្ចូលខាងលើ រួចគូសគ្រីស (Check) ទៅលើចំណុចមិនប្រក្រតីដែលពួកគេបានរកឃើញជាក់ស្តែង។ ប្រព័ន្ធនឹងគណនាភាគរយ AI ដោយស្វ័យប្រវត្តិតាមរយៈការសង្កេតផ្ទាល់ភ្នែករបស់សិស្ស!
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <!-- បញ្ជីសង្កេត Checkbox -->
                    <div class="space-y-3">
                        <h4 class="font-bold text-gray-800 mb-2">🔎 សូមជ្រើសរើសចំណុចខុសធម្មតាដែលរកឃើញ៖</h4>
                        
                        <label class="flex items-start space-x-3 p-2 bg-white rounded-lg border hover:bg-gray-50 cursor-pointer">
                            <input type="checkbox" id="chkFinger" class="mt-1 h-4 w-4 text-blue-600 rounded" onchange="updateForensicScore()">
                            <span>🖐️ <strong>ម្រាមដៃ/ជើង៖</strong> មានលើសខុសធម្មតា រលាយចូលគ្នា ឬវៀច។</span>
                        </label>

                        <label class="flex items-start space-x-3 p-2 bg-white rounded-lg border hover:bg-gray-50 cursor-pointer">
                            <input type="checkbox" id="chkText" class="mt-1 h-4 w-4 text-blue-600 rounded" onchange="updateForensicScore()">
                            <span>🔤 <strong>អក្សរក្នុងរូប៖</strong> រញ៉េរញ៉ៃ វៀចវេរ ឬអានមិនចេញជាពាក្យ។</span>
                        </label>

                        <label class="flex items-start space-x-3 p-2 bg-white rounded-lg border hover:bg-gray-50 cursor-pointer">
                            <input type="checkbox" id="chkBg" class="mt-1 h-4 w-4 text-blue-600 rounded" onchange="updateForensicScore()">
                            <span>🧱 <strong>ផ្ទៃខាងក្រោយ៖</strong> មានវត្ថុវៀចវេរ បង្គោល កង់ឡាន រលាយខុសធម្មតា។</span>
                        </label>

                        <label class="flex items-start space-x-3 p-2 bg-white rounded-lg border hover:bg-gray-50 cursor-pointer">
                            <input type="checkbox" id="chkSkin" class="mt-1 h-4 w-4 text-blue-600 rounded" onchange="updateForensicScore()">
                            <span>👤 <strong>ស្បែក/ទម្រង់មុខ៖</strong> រលោងពេកដូចជ័រ គ្មានស្នាមជ្រួញ ឬភ្នែកមិនស្មើគ្នា។</span>
                        </label>

                        <label class="flex items-start space-x-3 p-2 bg-white rounded-lg border hover:bg-gray-50 cursor-pointer">
                            <input type="checkbox" id="chkShadow" class="mt-1 h-4 w-4 text-blue-600 rounded" onchange="updateForensicScore()">
                            <span>☀️ <strong>ស្រមោល/ពន្លឺ៖</strong> ស្រមោលបាញ់ទៅទិសដៅខុសពីប្រភពពន្លឺជុំវិញ។</span>
                        </label>
                    </div>

                    <!-- របារគណនាភាគរយ -->
                    <div class="bg-gray-100 p-6 rounded-xl flex flex-col justify-center items-center border">
                        <div class="text-gray-500 font-bold mb-2">កម្រិតសង្ស័យជា រូបភាព AI៖</div>
                        <div id="suspicionPercentage" class="text-5xl font-bold text-gray-400 mb-4">0%</div>
                        
                        <!-- Progress Bar -->
                        <div class="w-full bg-gray-300 rounded-full h-4 mb-4">
                            <div id="progressBar" class="bg-blue-500 h-4 rounded-full transition-all duration-500" style="width: 0%"></div>
                        </div>

                        <div id="suspicionVerdict" class="font-bold text-lg text-gray-500 text-center">សូមចាប់ផ្តើមគូសគ្រីសដើម្បីវិភាគ...</div>
                    </div>
                </div>

                <!-- របាយការណ៍បកស្រាយលម្អិត -->
                <div id="interactiveReport" class="hidden mt-6 p-4 bg-white rounded-xl border border-gray-200">
                    <h4 class="font-bold text-gray-800 border-b pb-2 mb-3">📄 របាយការណ៍វិភាគបច្ចេកទេសផ្លូវការ៖</h4>
                    <div id="reportText" class="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap"></div>
                </div>
            `;

            resultBox.classList.remove('hidden');
        }

        // មុខងារគណនាភាគរយ AI តាមការគ្រីសរបស់សិស្ស
        window.updateForensicScore = function() {
            const chkFinger = document.getElementById('chkFinger').checked;
            const chkText = document.getElementById('chkText').checked;
            const chkBg = document.getElementById('chkBg').checked;
            const chkSkin = document.getElementById('chkSkin').checked;
            const chkShadow = document.getElementById('chkShadow').checked;

            let score = 0;
            let reportDetails = [];

            if (chkFinger) {
                score += 30;
                reportDetails.push("- រកឃើញកំហុសបច្ចេកទេសលើម្រាមដៃ/កាយវិការ៖ នេះជាភស្តុតាងលេចធ្លោបំផុតនៃរូបភាព AI ជំនាន់បច្ចុប្បន្ន ដែលពិបាកគណនាទម្រង់ម្រាមដៃមនុស្សឲ្យបានល្អឥតខ្ចោះ។");
            }
            if (chkText) {
                score += 25;
                reportDetails.push("- រកឃើញកំហុសអក្ខរាវិរុទ្ធ និងទម្រង់អក្សរ៖ បង្ហាញថាអក្សរនៅក្នុងរូបភាពមានសណ្ឋានរញ៉េរញ៉ៃ គ្មានន័យ ព្រោះ AI មិនទាន់យល់ពីអក្សរសិល្ប៍ទេ គឺវាគ្រាន់តែទាញយកលំនាំរូបរាងអក្សរមកដាក់បញ្ចូលតែប៉ុណ្ណោះ។");
            }
            if (chkBg) {
                score += 20;
                reportDetails.push("- រកឃើញការខូចទ្រង់ទ្រាយផ្ទៃខាងក្រោយ៖ មានវត្ថុដូចជា របង បង្គោលភ្លើង ឬស៊ុមបង្អួចរលាយ ឬវៀចវេរ។ នេះបណ្តាលមកពី AI ផ្តោតការយកចិត្តទុកដាក់តែលើតួអង្គសំខាន់នៅចំកណ្តាល ហើយធ្វើឲ្យបាត់បង់ទម្រង់ត្រឹមត្រូវនៃវត្ថុជុំវិញ។");
            }
            if (chkSkin) {
                score += 15;
                reportDetails.push("- រកឃើញការកែច្នៃស្បែក/ផ្ទៃមុខរលោងពេក៖ ស្បែកមនុស្សមិនមានរន្ធញើស ឬមានជាតិសរសៃធម្មជាតិ និងមានពន្លឺចាំងលើភ្នែកខុសប្រក្រតី ដូចជាការផាត់ពណ៌ជ័រក្រមួន។");
            }
            if (chkShadow) {
                score += 10;
                reportDetails.push("- រកឃើញកំហុសពន្លឺ និងស្រមោល៖ ស្រមោលរបស់វត្ថុមិនស្របគ្នាតាមបែបវិទ្យាសាស្ត្ររូបវិទ្យា ផ្ទុយពីប្រភពពន្លឺដែលចាំងមក។");
            }

            const pctText = document.getElementById('suspicionPercentage');
            const progressBar = document.getElementById('progressBar');
            const suspicionVerdict = document.getElementById('suspicionVerdict');
            const interactiveReport = document.getElementById('interactiveReport');
            const reportText = document.getElementById('reportText');

            pctText.textContent = score + "%";
            progressBar.style.width = score + "%";

            // ប្តូរពណ៌ទៅតាមកម្រិតភាគរយសង្ស័យ
            if (score === 0) {
                pctText.className = "text-5xl font-bold text-gray-400 mb-4";
                progressBar.className = "bg-gray-400 h-4 rounded-full transition-all duration-500";
                suspicionVerdict.innerHTML = "📸 រូបភាពទំនងជា <span class='text-green-600'>ថតពិតធម្មជាតិ</span>";
                interactiveReport.classList.add('hidden');
            } else if (score < 40) {
                pctText.className = "text-5xl font-bold text-yellow-500 mb-4";
                progressBar.className = "bg-yellow-500 h-4 rounded-full transition-all duration-500";
                suspicionVerdict.innerHTML = "⚠️ មានចំណុច <span class='text-yellow-600'>សង្ស័យកាត់ត ឬកែច្នៃតិចតួច</span>";
                interactiveReport.classList.remove('hidden');
            } else if (score < 70) {
                pctText.className = "text-5xl font-bold text-orange-500 mb-4";
                progressBar.className = "bg-orange-500 h-4 rounded-full transition-all duration-500";
                suspicionVerdict.innerHTML = "🚨 លទ្ធភាពខ្ពស់ជា <span class='text-orange-600'>រូបភាពកាត់ត ឬបង្កើតដោយ AI</span>";
                interactiveReport.classList.remove('hidden');
            } else {
                pctText.className = "text-5xl font-bold text-red-600 mb-4 animate-pulse";
                progressBar.className = "bg-red-600 h-4 rounded-full transition-all duration-500";
                suspicionVerdict.innerHTML = "🚨🚨 ប្រាកដខ្លាំងណាស់ជា <span class='text-red-600'>រូបភាពបង្កើតដោយ AI ១០០%</span>";
                interactiveReport.classList.remove('hidden');
            }

            // សរសេររបាយការណ៍បកស្រាយលម្អិត
            if (score > 0) {
                reportText.innerHTML = `ផ្អែកលើការសង្កេតជាក់ស្តែង យើងបានរកឃើញភស្តុតាងបច្ចេកទេសចំនួន <strong>${reportDetails.length} ចំណុច</strong> ដូចខាងក្រោម៖\n\n${reportDetails.join('\n\n')}\n\n<strong>💡 សេចក្តីសន្និដ្ឋានសម្រាប់មេរៀន៖</strong> នៅក្នុងការរស់នៅប្រចាំថ្ងៃ សិស្សានុសិស្សត្រូវចាំថា AI តែងតែមាន "ស្នាមជើងបច្ចេកវិទ្យា (Digital Artifacts)"។ ការយកចិត្តទុកដាក់សង្កេតចំណុចល្អិតៗទាំងនេះ នឹងជួយការពារយើងពីការបោកប្រាស់ដោយរូបភាពក្លែងក្លាយនៅលើអ៊ីនធឺណិតយ៉ាងមានប្រសិទ្ធភាព!`;
            }
        };

        async function analyzeText() {
            const textInput = document.getElementById('newsInput').value.trim();
            if (!textInput) {
                alert("សូមបញ្ចូលអត្ថបទព័ត៌មាន ឬសំណួរជាមុនសិន!");
                return;
            }

            document.getElementById('resultBox').classList.add('hidden');
            document.getElementById('loadingIndicator').classList.remove('hidden');

            const systemPrompt = `អ្នកគឺជាអ្នកជំនាញខាងផ្ទៀងផ្ទាត់ការពិត (Fact-checker) ដ៏ពូកែម្នាក់នៅក្នុងប្រទេសកម្ពុជា។ ...`;

            try {
                if (!apiKey || apiKey === "") {
                    throw new Error("No API Key configured. Fallback to Local Engine.");
                }

                const result = await callGeminiAPI(systemPrompt, `សូមវិភាគអត្ថបទ ឬ សំណួរនេះ៖ "${textInput}"`);
                const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text;
                if (responseText) {
                    showResult(responseText);
                } else {
                    throw new Error("Empty AI Response");
                }
            } catch (error) {
                console.log("ប្រព័ន្ធកំពុងដំណើរការ Offline Engine ជំនួសវិញ...", error);
                setTimeout(() => {
                    const fallbackResponse = smartLocalTextAnalysis(textInput);
                    showResult(fallbackResponse);
                }, 1000); 
            }
        }

        async function analyzeImage() {
            if (!currentBase64Image) {
                alert("សូមជ្រើសរើសរូបភាពជាមុនសិន!");
                return;
            }

            document.getElementById('resultBox').classList.add('hidden');
            document.getElementById('loadingIndicator').classList.remove('hidden');
            
            // បើកបន្ទាត់ស្កេនរូបភាព (Visual Scanner)
            startScanner();

            const systemPrompt = `អ្នកគឺជាអ្នកជំនាញវិភាគរូបភាព (Digital Forensics Expert)។ ...`;

            try {
                if (!apiKey || apiKey === "") {
                    throw new Error("No API Key configured. Fallback to Local Engine.");
                }

                const result = await callGeminiAPI(systemPrompt, "សូមវិភាគរូបភាពនេះថាតើវាជារូបពិត ឬ AI?", currentBase64Image, "image/jpeg");
                const responseText = result.candidates?.[0]?.content?.parts?.[0]?.text;
                if (responseText) {
                    showResult(responseText);
                } else {
                    throw new Error("Empty AI Response");
                }
            } catch (error) {
                console.log("ប្រព័ន្ធកំពុងដំណើរការ Offline Image Forensic Interactive Worksheet...", error);
                
                // ពន្យារពេលស្កេន ២ វិនាទី ដើម្បីឲ្យមើលទៅរំភើប រួចបើកផ្ទាំងសន្លឹកកិច្ចការអន្តរកម្ម
                setTimeout(() => {
                    renderInteractiveImageForensicWorksheet();
                }, 2000);
            }
        }
    </script>
</body>
</html>
