PGDMP     "    /                 z         	   offers_db    13.4    13.4 0    ?           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ?           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ?           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            ?           1262    24978 	   offers_db    DATABASE     T   CREATE DATABASE offers_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'C';
    DROP DATABASE offers_db;
                postgres    false                        2615    2200    public    SCHEMA        CREATE SCHEMA public;
    DROP SCHEMA public;
                postgres    false            ?           0    0    SCHEMA public    COMMENT     6   COMMENT ON SCHEMA public IS 'standard public schema';
                   postgres    false    3            ?            1259    25147    offer_game_rules    TABLE     2  CREATE TABLE public.offer_game_rules (
    id integer NOT NULL,
    limit_number_redemptions character varying(255),
    register_another_platform character varying(255),
    promotional_code character varying(255),
    minimum_amount character varying(255),
    cumulative_discounts character varying(255),
    excluded_products character varying(255),
    limited_units character varying(255),
    shipping_days_number character varying(255),
    shipping_days_type character varying(255),
    shipping_value_type character varying(255),
    shipping_value character varying(255),
    shipping_operator character varying(255),
    guarantee_number character varying(255),
    guarantee_type character varying(255),
    accepts_returns character varying(255),
    accepts_money_returns character varying(255),
    phone character varying(255),
    cellphone character varying(255),
    whatsapp_number character varying(255),
    formatted_text character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 $   DROP TABLE public.offer_game_rules;
       public         heap    postgres    false    3            ?            1259    25145    offer_game_rules_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.offer_game_rules_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 .   DROP SEQUENCE public.offer_game_rules_id_seq;
       public          postgres    false    205    3            ?           0    0    offer_game_rules_id_seq    SEQUENCE OWNED BY     S   ALTER SEQUENCE public.offer_game_rules_id_seq OWNED BY public.offer_game_rules.id;
          public          postgres    false    204            ?            1259    25169    offer_point_sales    TABLE     M  CREATE TABLE public.offer_point_sales (
    id integer NOT NULL,
    point_sale_id integer,
    offer_pk integer,
    point_sale_address character varying(255),
    city_code integer,
    city_description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 %   DROP TABLE public.offer_point_sales;
       public         heap    postgres    false    3            ?            1259    25167    offer_point_sales_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.offer_point_sales_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public.offer_point_sales_id_seq;
       public          postgres    false    3    209            ?           0    0    offer_point_sales_id_seq    SEQUENCE OWNED BY     U   ALTER SEQUENCE public.offer_point_sales_id_seq OWNED BY public.offer_point_sales.id;
          public          postgres    false    208            ?            1259    25158    offer_reviews    TABLE     g  CREATE TABLE public.offer_reviews (
    id integer NOT NULL,
    observations character varying(255),
    "user" character varying(255),
    new_sate_id integer,
    date_time timestamp with time zone,
    review_section_id integer,
    offer_id integer,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 !   DROP TABLE public.offer_reviews;
       public         heap    postgres    false    3            ?            1259    25156    offer_reviews_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.offer_reviews_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.offer_reviews_id_seq;
       public          postgres    false    207    3            ?           0    0    offer_reviews_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.offer_reviews_id_seq OWNED BY public.offer_reviews.id;
          public          postgres    false    206            ?            1259    25136    offer_settings    TABLE     7  CREATE TABLE public.offer_settings (
    id integer NOT NULL,
    country character varying(255),
    active character varying(255),
    type character varying(255),
    title character varying(255),
    subtitle character varying(255),
    prefix character varying(255),
    suffix character varying(255),
    side_text character varying(255),
    placeholder character varying(255),
    icon character varying(255),
    input_properties character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 "   DROP TABLE public.offer_settings;
       public         heap    postgres    false    3            ?            1259    25134    offer_settings_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.offer_settings_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 ,   DROP SEQUENCE public.offer_settings_id_seq;
       public          postgres    false    3    203            ?           0    0    offer_settings_id_seq    SEQUENCE OWNED BY     O   ALTER SEQUENCE public.offer_settings_id_seq OWNED BY public.offer_settings.id;
          public          postgres    false    202            ?            1259    25180    offers    TABLE       CREATE TABLE public.offers (
    id integer NOT NULL,
    brand_id integer,
    brand_name character varying(255),
    brand_logo character varying(255)[],
    identifier character varying(255) NOT NULL,
    created_by_user_id integer,
    created_by_user_name character varying(255),
    type_value character varying(255),
    category_ids integer[],
    user_id integer,
    country_id integer,
    country_name character varying(255),
    status character varying(255),
    scope_value character varying(255),
    offer_url character varying(255),
    start_date timestamp with time zone,
    start_time timestamp with time zone,
    end_date timestamp with time zone,
    end_time timestamp with time zone,
    day_of_week integer[],
    terms_and_conditions character varying(255),
    scope_id integer,
    bussisnes_id integer,
    game_rules_id integer,
    reviewer_email character varying(255),
    images character varying(255)[],
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
    DROP TABLE public.offers;
       public         heap    postgres    false    3            ?            1259    25178    offers_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.offers_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.offers_id_seq;
       public          postgres    false    3    211            ?           0    0    offers_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.offers_id_seq OWNED BY public.offers.id;
          public          postgres    false    210            ?            1259    25191    review_sections    TABLE     ?   CREATE TABLE public.review_sections (
    id integer NOT NULL,
    name character varying(255),
    description character varying(255),
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);
 #   DROP TABLE public.review_sections;
       public         heap    postgres    false    3            ?            1259    25189    review_sections_id_seq    SEQUENCE     ?   CREATE SEQUENCE public.review_sections_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 -   DROP SEQUENCE public.review_sections_id_seq;
       public          postgres    false    3    213            ?           0    0    review_sections_id_seq    SEQUENCE OWNED BY     Q   ALTER SEQUENCE public.review_sections_id_seq OWNED BY public.review_sections.id;
          public          postgres    false    212            T           2604    25150    offer_game_rules id    DEFAULT     z   ALTER TABLE ONLY public.offer_game_rules ALTER COLUMN id SET DEFAULT nextval('public.offer_game_rules_id_seq'::regclass);
 B   ALTER TABLE public.offer_game_rules ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    205    204    205            V           2604    25172    offer_point_sales id    DEFAULT     |   ALTER TABLE ONLY public.offer_point_sales ALTER COLUMN id SET DEFAULT nextval('public.offer_point_sales_id_seq'::regclass);
 C   ALTER TABLE public.offer_point_sales ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    209    208    209            U           2604    25161    offer_reviews id    DEFAULT     t   ALTER TABLE ONLY public.offer_reviews ALTER COLUMN id SET DEFAULT nextval('public.offer_reviews_id_seq'::regclass);
 ?   ALTER TABLE public.offer_reviews ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    206    207    207            S           2604    25139    offer_settings id    DEFAULT     v   ALTER TABLE ONLY public.offer_settings ALTER COLUMN id SET DEFAULT nextval('public.offer_settings_id_seq'::regclass);
 @   ALTER TABLE public.offer_settings ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    202    203    203            W           2604    25183 	   offers id    DEFAULT     f   ALTER TABLE ONLY public.offers ALTER COLUMN id SET DEFAULT nextval('public.offers_id_seq'::regclass);
 8   ALTER TABLE public.offers ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    210    211    211            X           2604    25194    review_sections id    DEFAULT     x   ALTER TABLE ONLY public.review_sections ALTER COLUMN id SET DEFAULT nextval('public.review_sections_id_seq'::regclass);
 A   ALTER TABLE public.review_sections ALTER COLUMN id DROP DEFAULT;
       public          postgres    false    212    213    213            ?          0    25147    offer_game_rules 
   TABLE DATA           ?  COPY public.offer_game_rules (id, limit_number_redemptions, register_another_platform, promotional_code, minimum_amount, cumulative_discounts, excluded_products, limited_units, shipping_days_number, shipping_days_type, shipping_value_type, shipping_value, shipping_operator, guarantee_number, guarantee_type, accepts_returns, accepts_money_returns, phone, cellphone, whatsapp_number, formatted_text, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    205   ;B       ?          0    25169    offer_point_sales 
   TABLE DATA           ?   COPY public.offer_point_sales (id, point_sale_id, offer_pk, point_sale_address, city_code, city_description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    209   XB       ?          0    25158    offer_reviews 
   TABLE DATA           ?   COPY public.offer_reviews (id, observations, "user", new_sate_id, date_time, review_section_id, offer_id, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    207   uB       ?          0    25136    offer_settings 
   TABLE DATA           ?   COPY public.offer_settings (id, country, active, type, title, subtitle, prefix, suffix, side_text, placeholder, icon, input_properties, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    203   ?B       ?          0    25180    offers 
   TABLE DATA           ?  COPY public.offers (id, brand_id, brand_name, brand_logo, identifier, created_by_user_id, created_by_user_name, type_value, category_ids, user_id, country_id, country_name, status, scope_value, offer_url, start_date, start_time, end_date, end_time, day_of_week, terms_and_conditions, scope_id, bussisnes_id, game_rules_id, reviewer_email, images, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    211   ?B       ?          0    25191    review_sections 
   TABLE DATA           Z   COPY public.review_sections (id, name, description, "createdAt", "updatedAt") FROM stdin;
    public          postgres    false    213   ?B                   0    0    offer_game_rules_id_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public.offer_game_rules_id_seq', 1, false);
          public          postgres    false    204                       0    0    offer_point_sales_id_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public.offer_point_sales_id_seq', 1, false);
          public          postgres    false    208                       0    0    offer_reviews_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.offer_reviews_id_seq', 1, false);
          public          postgres    false    206                       0    0    offer_settings_id_seq    SEQUENCE SET     D   SELECT pg_catalog.setval('public.offer_settings_id_seq', 1, false);
          public          postgres    false    202                       0    0    offers_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.offers_id_seq', 1, false);
          public          postgres    false    210                       0    0    review_sections_id_seq    SEQUENCE SET     E   SELECT pg_catalog.setval('public.review_sections_id_seq', 1, false);
          public          postgres    false    212            \           2606    25155 &   offer_game_rules offer_game_rules_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.offer_game_rules
    ADD CONSTRAINT offer_game_rules_pkey PRIMARY KEY (id);
 P   ALTER TABLE ONLY public.offer_game_rules DROP CONSTRAINT offer_game_rules_pkey;
       public            postgres    false    205            `           2606    25177 (   offer_point_sales offer_point_sales_pkey 
   CONSTRAINT     f   ALTER TABLE ONLY public.offer_point_sales
    ADD CONSTRAINT offer_point_sales_pkey PRIMARY KEY (id);
 R   ALTER TABLE ONLY public.offer_point_sales DROP CONSTRAINT offer_point_sales_pkey;
       public            postgres    false    209            ^           2606    25166     offer_reviews offer_reviews_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.offer_reviews
    ADD CONSTRAINT offer_reviews_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.offer_reviews DROP CONSTRAINT offer_reviews_pkey;
       public            postgres    false    207            Z           2606    25144 "   offer_settings offer_settings_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.offer_settings
    ADD CONSTRAINT offer_settings_pkey PRIMARY KEY (id);
 L   ALTER TABLE ONLY public.offer_settings DROP CONSTRAINT offer_settings_pkey;
       public            postgres    false    203            b           2606    25188    offers offers_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.offers
    ADD CONSTRAINT offers_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.offers DROP CONSTRAINT offers_pkey;
       public            postgres    false    211            d           2606    25199 $   review_sections review_sections_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.review_sections
    ADD CONSTRAINT review_sections_pkey PRIMARY KEY (id);
 N   ALTER TABLE ONLY public.review_sections DROP CONSTRAINT review_sections_pkey;
       public            postgres    false    213            ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?      ?      x?????? ? ?     