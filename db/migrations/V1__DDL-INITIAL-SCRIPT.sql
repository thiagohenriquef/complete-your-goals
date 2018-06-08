CREATE TABLE public.objetivos (
	id serial NOT NULL,
	texto varchar(80) NOT NULL,
	concluido bool NULL DEFAULT false,
	createdat timestamp NULL DEFAULT now(),
	CONSTRAINT objetivos_pkey PRIMARY KEY (id)
)
WITH (
	OIDS=FALSE
) ;

CREATE TABLE public.test (
	id serial NOT NULL,
	description_or_time varchar(40) NULL DEFAULT CURRENT_TIMESTAMP::character varying,
	CONSTRAINT test_pkey PRIMARY KEY (id)
)
WITH (
	OIDS=FALSE
) ;
