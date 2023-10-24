---
title: "Dwie formy Pre-renderingu"
date: "2023-10-23"
---

W Next.js istnieją dwie główne formy pre-renderingu, które pozwalają na generowanie stron zanim zostaną dostarczone do przeglądarki. Te dwie formy to:

Static Generation (SG):

Static Generation (SG) jest jednym z głównych sposobów pre-renderingu w Next.js.
Pozwala na wygenerowanie stron jako statycznych plików HTML podczas procesu budowania projektu.
Te statyczne pliki HTML są dostarczane bezpośrednio z serwera do przeglądarki, co zapewnia szybką wydajność.
SG jest idealny do treści, które nie zmieniają się często, takich jak strony marketingowe, blogi czy inne treści, które nie wymagają dynamicznego odświeżania za każdym razem, gdy użytkownik odwiedza stronę.

Server-Side Generation (SSG):

Server-Side Generation (SSG) to drugi sposób pre-renderingu dostępny w Next.js.
W przypadku SSG strony są generowane na serwerze za każdym razem, gdy użytkownik wywołuje żądanie do danej strony.
Pozwala to na generowanie dynamicznych treści na podstawie bieżących danych i parametrów żądania.
SSG jest przydatny, gdy potrzebujesz dynamicznej zawartości, ale nadal chcesz korzystać z optymalizacji wydajności i SEO.
Oba te podejścia w Next.js pozwalają na tworzenie stron internetowych z pre-renderowaną zawartością, co przyczynia się do szybszej wydajności i lepszego wsparcia dla SEO w porównaniu z tradycyjnym Client-Side Rendering (CSR). Wybór między SG a SSG zależy od konkretnych potrzeb projektu, jak również od częstotliwości zmian w treści i optymalizacji wydajności.
