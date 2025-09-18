"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

export default function GalleryPage() {
  const [loaded, setLoaded] = useState(false);

  const images = [
    "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/536433765_1071357038311418_7803963255659716668_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeECbN1SKAW6u4toxObiYTEDeEBRg6KKDmB4QFGDoooOYGs5oBEwxX0PZoxjzHEJc1xd2TBaEIK2DpssUuNNNayV&_nc_ohc=U4_ZCEgzXNMQ7kNvwHSXo_w&_nc_oc=AdkHw2MXxslfCqXyIEzi08S_r8XL8RSJ8gMH9vm4EiTiAeACi3KLPJ3Azq_8qwJO4E1nXxMvsjEADd6NcPd3HCRc&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=EXZS2FXIEScQIeU9B6jCkw&oh=00_AfbIy6W3pGGj0jxLfGP8n8zG6_XISavLkV5fuIFrT4LNpA&oe=68D17D26",
    "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/534488497_1071357021644753_2058593982102149574_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH2qyNhM1dUjhRoF17PI3kq9FITXUToX-n0UhNdROhf6Re47Sf05bAkMOPdts9Rnjxf7Kgl8CS-e0ukn29nUOeK&_nc_ohc=HeAh-7y2PKYQ7kNvwFa8pkb&_nc_oc=Admzzq2qeATKI7Nk41TY4rKYPQ3f-XpQUuvZCzBbFRIH0JLNoXEnFU7uTinOlFvx34SC4ONNlKUu9ProQZxbWzgm&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=fEz0FKEl6f4cA5-9RvJ2mA&oh=00_Afa0GmBd9_-NmnGWb9zNes84PR8JotKiBBjAVc4_lqaR9Q&oe=68D17BFC",
    "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/536002327_1071356941644761_4329243762661087481_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeECoWQFu5Qj9Q2Ckz_iq5Ni622GsHmzxxLrbYawebPHEgLCyoI1oo5KsEh13oRwQEDGWTJaeZZlvJMfuL7N-5HU&_nc_ohc=GokyA6kbSFYQ7kNvwH-ITT6&_nc_oc=AdmmZnuKi12n7LEHFdA_vXFAmO-OgeYg6Wbdhh1M_8rENHL4QKayJW3_kf2a9LWrFC88_b8QW4RaKWXn7HENcizR&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=Q7sGCIcQSebuCJ5hgqbVFg&oh=00_AfZey5nD2XO56Vi89x2SxkoqgHHtHHNBlQwU8nwLD5hQdQ&oe=68D16D2F",
    "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/536296374_1071356938311428_5144338043839731335_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGHzkIIMNf6daMB1bNuVemNdC9S8nK4Oz10L1Lycrg7PYbfjTRLCXl-vvjYzmRpqYY1E8XY72_H2HPZH2DChJjx&_nc_ohc=mizswkDawHUQ7kNvwG7xv7M&_nc_oc=Adn3Z-H0U_1tltZmNnDfYg7aaI0OPABQpNaIM301ZzhlnNdLjNd748GQCQiBsRIhWHPczY554onWudR-W4kvBdKL&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=P6VEHIUA10HBqodNNySYHw&oh=00_AfZRuQjhJ7XAp3TF-jsgC_QgYCsLzG39lLMzh5EdFG8mgA&oe=68D17B24",
    "https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/518690454_1045261644254291_5869235218977525855_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHrfgpmKsml0cqE2EgSBHucpSW0OYZSZyulJbQ5hlJnKxjSuUpD60xyQXF_-t0KXCVoL_aq9jxKco7byO3QvWGS&_nc_ohc=O7bSjLMoPKIQ7kNvwG3PLWW&_nc_oc=AdkVMlnBtNwcvSVURhK3LgG70g2Lo45VMjFKvU01UePpojcmX7GH6S33DDz3Oh2NnkMWoI2gg2vfwXLnUUtP7qeJ&_nc_zt=23&_nc_ht=scontent-hkg4-2.xx&_nc_gid=FQB3RE_lNVvzDlCfKCVlIA&oh=00_Afb33JRTgPNYZvYlhIingcDD4RQdNtab9DaWSTJN7YoYJw&oe=68D18235",
    "https://scontent-hkg4-2.xx.fbcdn.net/v/t39.30808-6/535537117_1071356454978143_9113958179512898586_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGP6frEfhc8sJ40d0MEHJNarUmUS-bp2_atSZRL5unb9uBtFa0jKzEqW9wDxOqGsOpmYa2bn2KaokEkUO0uQUf2&_nc_ohc=bZ7_dlYHjEUQ7kNvwHJr456&_nc_oc=AdnBomAzNhAePjpEewbObEvSfsrgGkgP6lGQS56Grch9LwdeotEJdUiRRYugUWnMDlLlPdHakTerkRdtDLOswlKV&_nc_zt=23&_nc_ht=scontent-hkg4-2.xx&_nc_gid=kLrHV8MerbB8w4bEg7UI6Q&oh=00_AfYJIAlV55kluUAAKXhIJEsGXbXxoisMddGydWlmUd_WQw&oe=68D1712F",
    "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/517399814_1045261800920942_204422574500530403_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGKWNHzJZRBYRpSb4WT6gbGxJSeW1XSPiTElJ5bVdI-JPV85PPdX63h1O6DY6_EubUllWnTvmwjFia0J5wSlBaO&_nc_ohc=KMqFTJQ6pQUQ7kNvwHIxBtv&_nc_oc=AdmJGHocK35Jvu5IuIAg0IcPSochW14YIfTFZIff97re-cxAK4Z2xxVzRxktG9eWMd87MZF_lenpaW6D-aGfNNMO&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=Uc2btEmyWIOUOOzrVVCEEw&oh=00_Afak-HsZZm2vQIAwvqsDOyOdAYxFx9NIabbZJ22naQX4gg&oe=68D17F10",
    "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/492500378_985488256898297_7857584939928126152_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGjwAOkkZCdpKOzizQalfkUoXcEQMzp1n2hdwRAzOnWfdx9-TcbOsVX1J-nQHVBQe7-XoQ5U7pQUjmODu9kzUok&_nc_ohc=dTENDwhhPUoQ7kNvwF_sfLL&_nc_oc=AdncC9JdbvVj_bz9ZtfXSkJhBTPDjqEPolRv341xv6NpmQlY30xkjpgQkYwDKhSnwvdJjAL5unF7dmOo7IJngrDn&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=9IyVUWGE-Em2Ea0Mf_vYlA&oh=00_AfaPWYib_qhpjyCfWlF_c31LPjNv0j3s1J9Kn7ZjcTj66g&oe=68D1856F",
    "https://scontent-hkg4-1.xx.fbcdn.net/v/t39.30808-6/492500378_985488256898297_7857584939928126152_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGjwAOkkZCdpKOzizQalfkUoXcEQMzp1n2hdwRAzOnWfdx9-TcbOsVX1J-nQHVBQe7-XoQ5U7pQUjmODu9kzUok&_nc_ohc=dTENDwhhPUoQ7kNvwF_sfLL&_nc_oc=AdncC9JdbvVj_bz9ZtfXSkJhBTPDjqEPolRv341xv6NpmQlY30xkjpgQkYwDKhSnwvdJjAL5unF7dmOo7IJngrDn&_nc_zt=23&_nc_ht=scontent-hkg4-1.xx&_nc_gid=9IyVUWGE-Em2Ea0Mf_vYlA&oh=00_AfaPWYib_qhpjyCfWlF_c31LPjNv0j3s1J9Kn7ZjcTj66g&oe=68D1856F",
    "https://scontent-hkg1-2.xx.fbcdn.net/v/t39.30808-6/487298236_969736821806774_5727046964241319610_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEJkWor-fM0qTwHoe4cgeAb1ICeNAurE27UgJ40C6sTblDuDDc20mjzNao99lz861P4zm8VAbl7c09hi4SYWlNt&_nc_ohc=aZ0q2qw1RMMQ7kNvwFN2AeG&_nc_oc=AdmNUV62QuG0cvVzEkZUNY9qy35DSRahSaV_y-vP1n5oJkmr7B8fnbtLueH8pZABwuiQKOfGCorzPR3UCOhpjkr0&_nc_zt=23&_nc_ht=scontent-hkg1-2.xx&_nc_gid=FcO4jSYk-KBiIJ7ZpW_f5w&oh=00_Afbq_wBSgBKHejTyeoLUlMSniVLFkZw5hnMDY6XAlOVz-g&oe=68D18563",
  ];

  return (
    <main>
      {/* Mobile: 2 cột, Tablet: 3, Desktop: 4 */}
      <motion.div
        className="columns-2 lg:columns-4 gap-4 [column-fill:_balance]"
        layout
      >
        {images.map((src, idx) => {
          return (
            <motion.div
              key={idx}
              className="mb-4 relative group overflow-hidden rounded-xl break-inside-avoid"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              layout
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            >
              {/* hiệu ứng fade-in khi ảnh load xong */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={loaded ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Image
                  src={src}
                  alt={`Ảnh ${idx + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto object-cover block"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  onLoadingComplete={() => setLoaded(true)}
                />
              </motion.div>

              {/* Overlay hover */}
              <motion.div
                className="absolute inset-0 bg-black/40 flex items-center justify-center
                           opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <motion.span
                  className="text-white text-lg font-semibold"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  Ảnh {idx + 1}
                </motion.span>
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>
    </main>
  );
}
