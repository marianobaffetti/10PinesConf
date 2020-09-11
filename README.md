# 10PinesConf demo.

Client React deployado en app engine de google, le pega a un api gateway que termina una lambda node, que agrega un cliente a una DB de dynamo.

Todo usando terraform para provisionar la infraestructura usando dos major providers diferentes(gcloud y aws) y conectarlos de alguna manera en su uso.

Ventajas? Pricing de cada provider, arreglos comerciales, datacenters locales, etc.
