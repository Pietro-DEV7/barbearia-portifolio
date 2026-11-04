// All 17 Services Preserved Exactly as Requested
        const allServices = [
            { id: 1, name: "Tesoura máquina", price: "R$ 40,00", rawPrice: 40, duration: "30 min", category: "corte", desc: "Corte mista com degradê ou laterais na máquina e topo modelado na tesoura." },
            { id: 2, name: "Corte máquina / navalha geral / 2 pentes", price: "R$ 30,00", rawPrice: 30, duration: "30 min", category: "corte", desc: "Corte prático usando até dois pentes na máquina e pezinho afiado na navalha." },
            { id: 3, name: "Máquina simples", price: "R$ 20,00", rawPrice: 20, duration: "30 min", category: "corte", desc: "Manutenção uniforme de cabelo com pente único na máquina." },
            { id: 4, name: "Corte desconto", price: "R$ 35,00", rawPrice: 35, duration: "30 min", category: "corte", desc: "Corte tradicional com condição especial promocional." },
            { id: 5, name: "Corte fem. Médio/curto", price: "R$ 70,00", rawPrice: 70, duration: "45 min", category: "corte", desc: "Corte estilizado sob medida para cabelos femininos médios ou curtos." },
            
            { id: 6, name: "Barba completa", price: "R$ 30,00", rawPrice: 30, duration: "15 min", category: "barba", desc: "Alinhamento com toalha quente, óleo hidratante e navalha afiada." },
            { id: 7, name: "Barba + pezinho", price: "R$ 35,00", rawPrice: 35, duration: "15 min", category: "barba", desc: "Desenho completo da barba somado ao acabamento do pezinho do cabelo." },
            { id: 8, name: "Barba ou maq des", price: "R$ 25,00", rawPrice: 25, duration: "30 min", category: "barba", desc: "Ajuste rápido de barba ou acabamento de maquina com degradê." },
            
            { id: 9, name: "Combo1 - Tesoura/máquina + Barba", price: "R$ 60,00", rawPrice: 60, duration: "45 min", category: "combo", desc: "Corte completo personalizado (tesoura/máquina) combinado com barba." },
            { id: 10, name: "Combo2 - Máquina/degrade + Barba", price: "R$ 50,00", rawPrice: 50, duration: "45 min", category: "combo", desc: "Corte degradê na máquina acompanhado de barboterapia." },
            { id: 11, name: "Combo3 - Maquina simples + barba", price: "R$ Consultar", rawPrice: 0, duration: "45 min", category: "combo", desc: "Corte simples de máquina acompanhado de manutenção de barba." },
            { id: 12, name: "Combo4 - corte tesoura.+ Maq. + sobrancelha", price: "R$ Consultar", rawPrice: 0, duration: "45 min", category: "combo", desc: "Combo master com corte completo e alinhamento de sobrancelhas." },
            { id: 13, name: "Combo desconto", price: "R$ Consultar", rawPrice: 0, duration: "45 min", category: "combo", desc: "Pacote promocional sob consulta presencial." },

            { id: 14, name: "Alisamento Americano (Selagem)", price: "R$ 50,00", rawPrice: 50, duration: "30 min", category: "quimica", desc: "Redução de volume e alinhamento dos fios com aspecto natural." },
            { id: 15, name: "Luzes comum/ reflexo + corte", price: "R$ 85,00", rawPrice: 85, duration: "75 min", category: "quimica", desc: "Iluminação capilar clássica com reflexos e corte finalizador." },
            { id: 16, name: "Luzes platinado / reflexo + corte", price: "R$ Consultar", rawPrice: 0, duration: "75 min", category: "quimica", desc: "Reflexos em tom platinado extremo com tratamento e corte." },
            { id: 17, name: "Platinado + corte", price: "R$ 140,00", rawPrice: 140, duration: "90 min", category: "quimica", desc: "Descoloração global em tom platinado vip, reconstrução e corte." }
        ];

        // Render Editorial List of Services
        function renderServicesList(category = "todos") {
            const container = document.getElementById('services-container');
            container.innerHTML = '';

            const filtered = category === "todos" 
                ? allServices 
                : allServices.filter(s => s.category === category);

            filtered.forEach(service => {
                const row = document.createElement('div');
                row.className = "py-6 px-4 hover:bg-charcoal-900 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group";
                
                row.innerHTML = `
                    <div class="space-y-1 max-w-xl">
                        <div class="flex items-center gap-3">
                            <h3 class="text-base sm:text-lg font-serif-title font-normal text-alabaster group-hover:text-brass-400 transition-colors">
                                ${service.name}
                            </h3>
                            <span class="text-[10px] font-mono text-muted uppercase border hairline-border px-2 py-0.5">
                                ${service.duration}
                            </span>
                        </div>
                        <p class="text-muted text-xs font-light leading-relaxed">
                            ${service.desc}
                        </p>
                    </div>

                    <div class="flex items-center justify-between md:justify-end gap-6 pt-2 md:pt-0">
                        <span class="text-sm sm:text-base font-semibold ${service.price.includes('Consultar') ? 'text-muted font-normal text-xs' : 'text-brass-400'} font-mono">
                            ${service.price}
                        </span>
                        <button onclick="openBookingModal(${service.id})" class="px-4 py-2 bg-charcoal-850 group-hover:bg-brass-500 group-hover:text-charcoal-950 text-alabaster border hairline-border text-xs font-bold uppercase tracking-wider transition-all duration-300">
                            Agendar
                        </button>
                    </div>
                `;
                container.appendChild(row);
            });
        }

        // Category Tabs Interaction
        function filterCategory(cat) {
            document.querySelectorAll('.cat-tab').forEach(tab => {
                if(tab.dataset.cat === cat) {
                    tab.className = "cat-tab active px-4 py-2 text-xs uppercase tracking-widest text-brass-400 border-b-2 border-brass-500 font-medium transition-all";
                } else {
                    tab.className = "cat-tab px-4 py-2 text-xs uppercase tracking-widest text-muted hover:text-alabaster font-medium transition-all";
                }
            });
            renderServicesList(cat);
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }
        document.getElementById('mobile-menu-toggle').addEventListener('click', toggleMobileMenu);

        // BOOKING MODAL LOGIC
        let currentModalStep = 1;
        let selectedTime = "10:00";

        function populateModalServices() {
            const select = document.getElementById('modal-service-select');
            select.innerHTML = '';
            allServices.forEach(s => {
                const opt = document.createElement('option');
                opt.value = s.id;
                opt.textContent = `${s.name} (${s.price})`;
                select.appendChild(opt);
            });
        }

        function onModalServiceChange() {
            const select = document.getElementById('modal-service-select');
            const selectedId = parseInt(select.value);
            const service = allServices.find(s => s.id === selectedId);
            if(service) {
                document.getElementById('modal-service-duration').textContent = service.duration;
                document.getElementById('modal-service-price').textContent = service.price;
            }
        }

        function generateModalTimes() {
            const container = document.getElementById('modal-time-slots');
            container.innerHTML = '';
            const times = ["09:00", "09:45", "10:30", "11:15", "13:30", "14:15", "15:00", "16:00", "17:00", "18:00", "18:45", "19:30"];
            
            times.forEach(t => {
                const btn = document.createElement('button');
                btn.type = 'button';
                btn.className = `p-2 text-xs font-mono border text-center transition-all ${t === selectedTime ? 'bg-brass-500 text-charcoal-950 font-bold border-brass-500' : 'bg-charcoal-950 text-muted border-charcoal-700 hover:border-brass-500/50 hover:text-alabaster'}`;
                btn.textContent = t;
                btn.onclick = () => {
                    selectedTime = t;
                    generateModalTimes();
                };
                container.appendChild(btn);
            });
        }

        function openBookingModal(serviceId = null) {
            populateModalServices();
            
            if(serviceId) {
                document.getElementById('modal-service-select').value = serviceId;
            }
            onModalServiceChange();

            // Set default date picker to today
            const today = new Date().toISOString().split('T')[0];
            const datePicker = document.getElementById('modal-date-picker');
            datePicker.value = today;
            datePicker.min = today;

            generateModalTimes();

            currentModalStep = 1;
            updateModalView(1);

            const modal = document.getElementById('booking-modal');
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
            }, 10);
        }

        function openBookingModalWithBarber(barberName) {
            openBookingModal();
            const barberSelect = document.getElementById('modal-barber-select');
            for(let i=0; i<barberSelect.options.length; i++) {
                if(barberSelect.options[i].value.includes(barberName.split(' ')[0])) {
                    barberSelect.selectedIndex = i;
                    break;
                }
            }
        }

        function closeBookingModal() {
            const modal = document.getElementById('booking-modal');
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        function updateModalView(step) {
            document.getElementById('modal-step-1').classList.add('hidden');
            document.getElementById('modal-step-2').classList.add('hidden');
            document.getElementById('modal-step-3').classList.add('hidden');
            document.getElementById('modal-step-success').classList.add('hidden');

            const footer = document.getElementById('modal-footer-controls');

            if(step === 4) {
                document.getElementById('modal-step-success').classList.remove('hidden');
                footer.classList.add('hidden');
            } else {
                document.getElementById(`modal-step-${step}`).classList.remove('hidden');
                footer.classList.remove('hidden');
            }

            // Update header steps info
            document.getElementById('step-indicator-count').textContent = `${step}/3`;
            const indicatorText = document.getElementById('step-indicator-text');
            
            if(step === 1) indicatorText.textContent = "Etapa 1 de 3: Escolha do Serviço";
            if(step === 2) indicatorText.textContent = "Etapa 2 de 3: Profissional & Data";
            if(step === 3) indicatorText.textContent = "Etapa 3 de 3: Seus Dados";

            // Button controls
            const btnPrev = document.getElementById('btn-modal-prev');
            const btnNext = document.getElementById('btn-modal-next');

            btnPrev.disabled = (step === 1);
            btnNext.textContent = (step === 3) ? "Confirmar Reserva" : "Avançar";
        }

        function navModalNext() {
            if(currentModalStep === 1) {
                currentModalStep = 2;
                updateModalView(2);
            } else if(currentModalStep === 2) {
                const dateVal = document.getElementById('modal-date-picker').value;
                if(!dateVal) {
                    alert('Selecione uma data para o agendamento.');
                    return;
                }
                currentModalStep = 3;
                updateSummaryData();
                updateModalView(3);
            } else if(currentModalStep === 3) {
                const name = document.getElementById('cust-name-input').value.trim();
                const phone = document.getElementById('cust-phone-input').value.trim();

                if(!name || !phone) {
                    alert('Por favor, informe seu nome e telefone WhatsApp.');
                    return;
                }

                currentModalStep = 4;
                updateModalView(4);
            }
        }

        function navModalPrev() {
            if(currentModalStep > 1) {
                currentModalStep--;
                updateModalView(currentModalStep);
            }
        }

        function updateSummaryData() {
            const select = document.getElementById('modal-service-select');
            const service = allServices.find(s => s.id === parseInt(select.value));
            const barber = document.getElementById('modal-barber-select').value;
            const dateVal = document.getElementById('modal-date-picker').value;
            const formattedDate = dateVal ? dateVal.split('-').reverse().join('/') : '';

            document.getElementById('sum-service-name').textContent = service ? service.name : '';
            document.getElementById('sum-barber-name').textContent = barber;
            document.getElementById('sum-datetime').textContent = `${formattedDate} às ${selectedTime}`;
            document.getElementById('sum-price').textContent = service ? service.price : '';
        }

        function triggerWhatsAppRedirect() {
            const name = document.getElementById('cust-name-input').value;
            const service = document.getElementById('sum-service-name').textContent;
            const datetime = document.getElementById('sum-datetime').textContent;
            const barber = document.getElementById('sum-barber-name').textContent;

            const text = `Olá! Gostaria de confirmar minha reserva na Barbearia Imperium:%0A%0A- *Cliente:* ${name}%0A- *Serviço:* ${service}%0A- *Data/Hora:* ${datetime}%0A- *Barbeiro:* ${barber}`;
            window.open(`https://wa.me/5511999998888?text=${text}`, '_blank');
        }

        // Initialize App
        window.onload = function() {
            renderServicesList("todos");
        };
