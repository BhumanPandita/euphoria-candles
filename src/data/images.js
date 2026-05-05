const u = (id, w = 800, h = 800) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&fit=crop&q=80&auto=format`

export const productImages = {
  lavenderBliss:   u('1561212856-44e9bae482aa', 600, 600),
  roseAmberJar:    u('1605651202774-7d573fd3f12d', 600, 600), // fixed
  sandalwoodLuxe:  u('1612293905607-b003de9e54fb', 600, 600),
  miniBloomSet:    u('1640095889747-2090ee12fa7d', 600, 600),
  citrusMorning:   u('1603905179139-db12ab535ca9', 600, 600),
  jasmineSerenade: u('1601479604588-68d9e6d386b5', 600, 600),
}

export const heroBg = u('1594813591867-02e797aa4581', 1600, 900)

export const brandStoryImage = u('1572726729207-a78d6feb18d7', 800, 700)

export const categoryImages = {
  candles:        u('1612179543058-ab74d388e0ce', 500, 400),
  'return-gifts': u('1643716991951-285e23e35961', 500, 400),
  corporate:      u('1596568840418-5f4db2029de0', 500, 400),
  wedding:        u('1643122966895-380f2a0fe570', 500, 400),
}

export const galleryImages = [
  { id: 1, label: 'Lavender Bliss',     tall: true,  src: u('1561212856-44e9bae482aa', 500, 700) },
  { id: 2, label: 'Rose Amber Jar',     tall: false, src: u('1605651202774-7d573fd3f12d', 500, 400) },
  { id: 3, label: 'Mini Bloom Set',     tall: false, src: u('1601922046210-41e129a3e64a', 500, 400) },
  { id: 4, label: 'Sandalwood Luxe',    tall: false, src: u('1612293905607-b003de9e54fb', 500, 400) },
  { id: 5, label: 'Wedding Collection', tall: true,  src: u('1585641689080-2e530457803b', 500, 700) },
  { id: 6, label: 'Corporate Gifting',  tall: false, src: u('1640095889747-2090ee12fa7d', 500, 400) },
  { id: 7, label: 'Citrus Morning',     tall: false, src: u('1615174111664-cbe2de69ed9d', 500, 400) },
  { id: 8, label: 'Jasmine Serenade',   tall: true,  src: u('1603905179139-db12ab535ca9', 500, 700) },
  { id: 9, label: 'Custom Order',       tall: false, src: u('1643122966676-29e8597257f7', 500, 400) },
]

export const instagramImages = [
  u('1613068431228-8cb6a1e92573', 400, 400),
  u('1601479604588-68d9e6d386b5', 400, 400),
  u('1619799360851-a143fbc240b3', 400, 400), // fixed
  u('1669824023993-273720598b14', 400, 400),
  u('1615174111664-cbe2de69ed9d', 400, 400),
  u('1572726729207-a78d6feb18d7', 400, 400),
]
