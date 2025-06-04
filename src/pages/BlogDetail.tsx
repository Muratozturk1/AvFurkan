import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const BlogDetail = () => {
    const { id } = useParams();
    const blogId = id ? parseInt(id) : 1;

    // Blog yazılarının detaylı içerikleri
    const blogContents = {
        1: {
            title: 'Ceza Hukukunda Yeni Düzenlemeler ve Değişiklikler',
            category: 'Ceza Hukuku',
            author: 'Av. Furkan Koç',
            image: '/resimm/cezahukuku.jpg',
            content: (
                <>
                    <div className="mb-8 max-w-2xl mx-auto">
                        <img src="/resimm/cezahukuku.jpg" alt="Ceza Hukuku" className="w-full h-48 object-contain rounded-lg shadow-lg" />
                    </div>

                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">Ceza Hukukunda Yeni Düzenlemeler ve Değişiklikler</h2>

                    <p className="mb-8 text-lg text-gray-700 leading-relaxed">Ceza hukuku, toplumun temel değerlerini ve düzenini korumak için en önemli hukuk dallarından biridir. Son dönemde yapılan değişiklikler ve yeni düzenlemeler, ceza hukukunun daha etkin ve adil bir şekilde uygulanmasını hedeflemektedir.</p>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">1. Yeni Ceza Kanunu Değişiklikleri</h3>
                        <p className="mb-4 text-gray-700">5237 sayılı Türk Ceza Kanunu'nda yapılan son değişiklikler şunları içermektedir:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Dijital suçlarla mücadele kapsamında yeni düzenlemeler</li>
                            <li className="font-medium">Ekonomik suçlarda ceza artırımları</li>
                            <li className="font-medium">Şiddet suçlarında caydırıcı cezalar</li>
                            <li className="font-medium">Denetimli serbestlik uygulamalarında değişiklikler</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">2. Dijital Suçlarla Mücadele</h3>
                        <p className="mb-4 text-gray-700">Teknolojinin gelişmesiyle birlikte dijital suçlar da artış göstermektedir. Bu kapsamda:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Siber suçlarla mücadele için yeni yasal düzenlemeler</li>
                            <li className="font-medium">Dijital verilerin korunması ve ihlal durumunda yaptırımlar</li>
                            <li className="font-medium">Bilişim sistemlerine yönelik suçlarda ceza artırımları</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">3. Ekonomik Suçlar</h3>
                        <p className="mb-4 text-gray-700">Ekonomik suçlarda yapılan değişiklikler şunları içermektedir:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Dolandırıcılık suçlarında ceza artırımları</li>
                            <li className="font-medium">Vergi kaçakçılığı ve kaçakçılık suçlarında yeni düzenlemeler</li>
                            <li className="font-medium">Kara para aklama suçlarında genişletilmiş kapsam</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">4. Şiddet Suçları</h3>
                        <p className="mb-4 text-gray-700">Şiddet suçlarına karşı getirilen yeni düzenlemeler:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Aile içi şiddet suçlarında artırılmış cezalar</li>
                            <li className="font-medium">Kadına yönelik şiddet suçlarında yeni düzenlemeler</li>
                            <li className="font-medium">Çocuklara karşı işlenen suçlarda ağırlaştırılmış cezalar</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">5. Denetimli Serbestlik</h3>
                        <p className="mb-4 text-gray-700">Denetimli serbestlik uygulamalarında yapılan değişiklikler:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Denetimli serbestlik sürelerinde değişiklikler</li>
                            <li className="font-medium">Elektronik kelepze uygulamasında yeni düzenlemeler</li>
                            <li className="font-medium">Denetimli serbestlik şartlarında güncellemeler</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mt-8">
                        <h4 className="text-2xl font-extrabold mb-4 text-gray-900 tracking-tight leading-tight">Önemli Not</h4>
                        <p className="text-gray-700">Bu değişiklikler ve düzenlemeler, ceza hukukunun daha etkin ve adil bir şekilde uygulanmasını sağlamak için yapılmıştır. Hukuki süreçlerde profesyonel destek almak, haklarınızı korumak açısından önemlidir.</p>
                    </div>
                </>
            )
        },
        2: {
            title: 'Aile Hukukunda Boşanma Süreci ve Haklar',
            category: 'Aile Hukuku',
            author: 'Av. Furkan Koç',
            image: '/resimm/ailehukuku.jpg',
            content: (
                <>
                    <div className="mb-8 max-w-2xl mx-auto">
                        <img src="/resimm/ailehukuku.jpg" alt="Aile Hukuku" className="w-full h-48 object-contain rounded-lg shadow-lg" />
                    </div>

                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">Aile Hukukunda Boşanma Süreci ve Haklar</h2>

                    <p className="mb-8 text-lg text-gray-700 leading-relaxed">Aile hukuku, toplumun temel yapı taşı olan ailenin hukuki düzenini sağlar. Boşanma süreci, bu alanın en hassas ve önemli konularından biridir.</p>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">1. Boşanma Nedenleri</h3>
                        <p className="mb-4 text-gray-700">Türk Medeni Kanunu'na göre boşanma nedenleri şunlardır:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Zina</li>
                            <li className="font-medium">Hayata kast, pek kötü veya onur kırıcı davranış</li>
                            <li className="font-medium">Suç işleme ve haysiyetsiz hayat sürme</li>
                            <li className="font-medium">Terketme</li>
                            <li className="font-medium">Akıl hastalığı</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">2. Nafaka Türleri</h3>
                        <p className="mb-4 text-gray-700">Boşanma sonrası nafaka türleri:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Tedbir nafakası</li>
                            <li className="font-medium">İştirak nafakası</li>
                            <li className="font-medium">Yoksulluk nafakası</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">3. Velayet ve Çocuk Hakları</h3>
                        <p className="mb-4 text-gray-700">Velayet konusunda dikkat edilmesi gerekenler:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Çocuğun menfaati ön planda tutulur</li>
                            <li className="font-medium">Velayet hakkı tek ebeveyne verilebilir</li>
                            <li className="font-medium">Kişisel ilişki kurma hakkı saklıdır</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mt-8">
                        <h4 className="text-2xl font-extrabold mb-4 text-gray-900 tracking-tight leading-tight">Önemli Not</h4>
                        <p className="text-gray-700">Boşanma süreci karmaşık ve duygusal bir süreçtir. Bu süreçte profesyonel hukuki destek almak, haklarınızı korumak açısından önemlidir.</p>
                    </div>
                </>
            )
        },
        3: {
            title: 'İş Hukukunda İşçi Hakları ve Yeni Düzenlemeler',
            category: 'İş Hukuku',
            author: 'Av. Furkan Koç',
            image: '/resimm/2.jpg',
            content: (
                <>
                    <div className="mb-8 max-w-2xl mx-auto">
                        <img src="/resimm/2.jpg" alt="İş Hukuku" className="w-full h-48 object-contain rounded-lg shadow-lg" />
                    </div>

                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">İş Hukukunda İşçi Hakları ve Yeni Düzenlemeler</h2>

                    <p className="mb-8 text-lg text-gray-700 leading-relaxed">İş hukuku, işçi ve işveren ilişkilerini düzenleyen, çalışma hayatının temel kurallarını belirleyen bir hukuk dalıdır.</p>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">1. İş Sözleşmesi Türleri</h3>
                        <p className="mb-4 text-gray-700">İş Kanunu'na göre sözleşme türleri:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Belirsiz süreli iş sözleşmesi</li>
                            <li className="font-medium">Belirli süreli iş sözleşmesi</li>
                            <li className="font-medium">Kısmi süreli iş sözleşmesi</li>
                            <li className="font-medium">Çağrı üzerine çalışma sözleşmesi</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">2. İşçi Hakları</h3>
                        <p className="mb-4 text-gray-700">Temel işçi hakları:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Ücret hakkı</li>
                            <li className="font-medium">İzin hakkı</li>
                            <li className="font-medium">Çalışma süreleri</li>
                            <li className="font-medium">İş güvenliği</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">3. İş Güvenliği</h3>
                        <p className="mb-4 text-gray-700">İş güvenliği önlemleri:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">İş sağlığı ve güvenliği eğitimi</li>
                            <li className="font-medium">Risk değerlendirmesi</li>
                            <li className="font-medium">Sağlık gözetimi</li>
                            <li className="font-medium">İş kazası ve meslek hastalığı önlemleri</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mt-8">
                        <h4 className="text-2xl font-extrabold mb-4 text-gray-900 tracking-tight leading-tight">Önemli Not</h4>
                        <p className="text-gray-700">İş hukuku alanında yaşanan sorunlarda, haklarınızı korumak için profesyonel hukuki destek almanız önemlidir.</p>
                    </div>
                </>
            )
        },
        4: {
            title: 'Ticaret Hukukunda Şirket Kurulumu ve Yönetimi',
            category: 'Ticaret Hukuku',
            author: 'Av. Furkan Koç',
            image: '/resimm/ticaret.jpg',
            content: (
                <>
                    <div className="mb-8 max-w-2xl mx-auto">
                        <img src="/resimm/ticaret.jpg" alt="Ticaret Hukuku" className="w-full h-48 object-contain rounded-lg shadow-lg" />
                    </div>

                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">Ticaret Hukukunda Şirket Kurulumu ve Yönetimi</h2>

                    <p className="mb-8 text-lg text-gray-700 leading-relaxed">Ticaret hukuku, ticari işletmelerin ve şirketlerin hukuki düzenini sağlayan önemli bir hukuk dalıdır. Şirket kurulum süreçleri, yönetim organları ve ticari işlemlerde dikkat edilmesi gerekenler bu alanda öne çıkar.</p>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">1. Şirket Türleri</h3>
                        <p className="mb-4 text-gray-700">Temel şirket türleri:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Anonim şirket</li>
                            <li className="font-medium">Limited şirket</li>
                            <li className="font-medium">Şahıs şirketleri</li>
                            <li className="font-medium">Kooperatifler</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">2. Şirket Kuruluşu</h3>
                        <p className="mb-4 text-gray-700">Kuruluş süreci:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Sermaye tespiti</li>
                            <li className="font-medium">Ortaklık sözleşmesi</li>
                            <li className="font-medium">Ticaret sicili kaydı</li>
                            <li className="font-medium">Vergi kaydı</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">3. Şirket Yönetimi</h3>
                        <p className="mb-4 text-gray-700">Yönetim konuları:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Yönetim kurulu</li>
                            <li className="font-medium">Genel kurul</li>
                            <li className="font-medium">Denetim</li>
                            <li className="font-medium">Şirket birleşme ve devralmaları</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mt-8">
                        <h4 className="text-2xl font-extrabold mb-4 text-gray-900 tracking-tight leading-tight">Önemli Not</h4>
                        <p className="text-gray-700">Ticaret hukuku alanında profesyonel hukuki destek almak, şirketinizin hukuki süreçlerini güvenle yönetmenizi sağlar.</p>
                    </div>
                </>
            )
        },
        5: {
            title: 'Gayrimenkul Hukukunda Satış ve Kiralama İşlemleri',
            category: 'Gayrimenkul Hukuku',
            author: 'Av. Furkan Koç',
            image: '/resimm/gayrimenkul.jpg',
            content: (
                <>
                    <div className="mb-8 max-w-2xl mx-auto">
                        <img src="/resimm/gayrimenkul.jpg" alt="Gayrimenkul Hukuku" className="w-full h-48 object-contain rounded-lg shadow-lg" />
                    </div>

                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">Gayrimenkul Hukukunda Satış ve Kiralama İşlemleri</h2>

                    <p className="mb-8 text-lg text-gray-700 leading-relaxed">Gayrimenkul hukuku, taşınmaz mallarla ilgili tüm hukuki süreçleri kapsayan önemli bir hukuk dalıdır. Satış ve kiralama işlemlerinde tarafların hakları ve yasal düzenlemeler bu alanda öne çıkar.</p>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">1. Tapu İşlemleri</h3>
                        <p className="mb-4 text-gray-700">Temel tapu işlemleri:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Satış ve devir işlemleri</li>
                            <li className="font-medium">İpotek işlemleri</li>
                            <li className="font-medium">Cins değişikliği</li>
                            <li className="font-medium">Taksim ve birleştirme</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">2. Kira Hukuku</h3>
                        <p className="mb-4 text-gray-700">Kira sözleşmeleri ve haklar:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Kira sözleşmesi türleri</li>
                            <li className="font-medium">Kiracı ve malik hakları</li>
                            <li className="font-medium">Kira artış oranları</li>
                            <li className="font-medium">Tahliye davaları</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">3. Kat Mülkiyeti</h3>
                        <p className="mb-4 text-gray-700">Kat mülkiyeti konuları:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Kat mülkiyeti kurulması</li>
                            <li className="font-medium">Kat malikleri kurulu</li>
                            <li className="font-medium">Aidat ve gider paylaşımı</li>
                            <li className="font-medium">Ortak alanların kullanımı</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mt-8">
                        <h4 className="text-2xl font-extrabold mb-4 text-gray-900 tracking-tight leading-tight">Önemli Not</h4>
                        <p className="text-gray-700">Gayrimenkul işlemleri karmaşık ve riskli olabilir. Bu süreçte profesyonel hukuki destek almak, haklarınızı korumak açısından önemlidir.</p>
                    </div>
                </>
            )
        },
        6: {
            title: 'Aile Hukukunda Nafaka Davaları ve Yeni Düzenlemeler',
            category: 'Aile Hukuku',
            author: 'Av. Furkan Koç',
            image: '/resimm/ailehukuku.jpg',
            content: (
                <>
                    <div className="mb-8 max-w-2xl mx-auto">
                        <img src="/resimm/ailehukuku.jpg" alt="Aile Hukuku" className="w-full h-48 object-contain rounded-lg shadow-lg" />
                    </div>

                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">Aile Hukukunda Nafaka Davaları ve Yeni Düzenlemeler</h2>

                    <p className="mb-8 text-lg text-gray-700 leading-relaxed">Nafaka davaları, boşanma sonrası tarafların maddi haklarını düzenleyen önemli bir hukuki süreçtir. Bu süreçte tarafların hakları, nafaka hesaplama yöntemleri ve yeni düzenlemeler hakkında detaylı bilgi sahibi olmak önemlidir.</p>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">1. Nafaka Türleri</h3>
                        <p className="mb-4 text-gray-700">Nafaka türleri şunlardır:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Tedbir nafakası</li>
                            <li className="font-medium">İştirak nafakası</li>
                            <li className="font-medium">Yoksulluk nafakası</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">2. Nafaka Hesaplama Yöntemleri</h3>
                        <p className="mb-4 text-gray-700">Nafaka hesaplama yöntemleri:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Gelir durumu</li>
                            <li className="font-medium">Yaşam standardı</li>
                            <li className="font-medium">İhtiyaçlar</li>
                            <li className="font-medium">Ekonomik koşullar</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">3. Yeni Düzenlemeler</h3>
                        <p className="mb-4 text-gray-700">Son dönemde yapılan düzenlemeler:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Nafaka artış oranları</li>
                            <li className="font-medium">Nafaka süreleri</li>
                            <li className="font-medium">Nafaka ödeme yöntemleri</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mt-8">
                        <h4 className="text-2xl font-extrabold mb-4 text-gray-900 tracking-tight leading-tight">Önemli Not</h4>
                        <p className="text-gray-700">Nafaka davalarında profesyonel hukuki destek almak, haklarınızı korumak açısından önemlidir.</p>
                    </div>
                </>
            )
        },
        7: {
            title: 'Ticaret Hukukunda Şirket Birleşmeleri ve Devralmaları',
            category: 'Ticaret Hukuku',
            author: 'Av. Furkan Koç',
            image: '/resimm/ticaret.jpg',
            content: (
                <>
                    <div className="mb-8 max-w-2xl mx-auto">
                        <img src="/resimm/ticaret.jpg" alt="Ticaret Hukuku" className="w-full h-48 object-contain rounded-lg shadow-lg" />
                    </div>

                    <h2 className="text-4xl font-extrabold mb-6 text-gray-900 tracking-tight leading-tight">Ticaret Hukukunda Şirket Birleşmeleri ve Devralmaları</h2>

                    <p className="mb-8 text-lg text-gray-700 leading-relaxed">Şirket birleşmeleri ve devralmaları, ticaret hukukunun önemli konularından biridir. Bu süreçlerde yasal prosedürler ve dikkat edilmesi gereken noktalar hakkında detaylı bilgi sahibi olmak önemlidir.</p>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">1. Birleşme Türleri</h3>
                        <p className="mb-4 text-gray-700">Birleşme türleri:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Yeni şirket kurulması suretiyle birleşme</li>
                            <li className="font-medium">Mevcut şirkete katılma suretiyle birleşme</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">2. Devralma Süreci</h3>
                        <p className="mb-4 text-gray-700">Devralma süreci:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Devralma sözleşmesi</li>
                            <li className="font-medium">Ortaklık paylarının devri</li>
                            <li className="font-medium">Ticaret sicili kaydı</li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                        <h3 className="text-3xl font-extrabold mb-4 text-gray-900 border-b-2 border-blue-200 pb-2 tracking-tight leading-tight">3. Yasal Prosedürler</h3>
                        <p className="mb-4 text-gray-700">Yasal prosedürler:</p>
                        <ul className="list-disc pl-6 mb-6 space-y-3 text-gray-700">
                            <li className="font-medium">Genel kurul kararı</li>
                            <li className="font-medium">Alacaklıların bilgilendirilmesi</li>
                            <li className="font-medium">Rekabet hukuku uyumluluğu</li>
                        </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg mt-8">
                        <h4 className="text-2xl font-extrabold mb-4 text-gray-900 tracking-tight leading-tight">Önemli Not</h4>
                        <p className="text-gray-700">Şirket birleşmeleri ve devralmalarında profesyonel hukuki destek almak, süreçlerin güvenle yönetilmesini sağlar.</p>
                    </div>
                </>
            )
        }
    };

    const blog = blogContents[blogId as keyof typeof blogContents];

    if (!blog) {
        return (
            <div className="container mx-auto px-4 py-20">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Blog yazısı bulunamadı</h1>
                    <Link
                        to="/blog"
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                    >
                        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Tüm Yazılara Dön
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-20">
            <article className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {blog.category}
                    </span>
                    <h1 className="text-3xl md:text-4xl font-bold mt-4 mb-4">{blog.title}</h1>
                    <div className="flex items-center text-gray-600">
                        <span className="mr-4">{blog.author}</span>
                    </div>
                </div>
                {blog.content}
                <div className="mt-8">
                    <Link
                        to="/blog"
                        className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center group"
                    >
                        <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                        </svg>
                        Tüm Yazılara Dön
                    </Link>
                </div>
            </article>
        </div>
    );
};

export default BlogDetail; 