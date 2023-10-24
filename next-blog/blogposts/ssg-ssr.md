---
title: "Kiedy używać Static Generation, a kiedy Server-side Rendering"
date: "2023-10-24"
---

W Next.js, wybór między statyczną generacją (Static Generation) a generacją po stronie serwera (Server-Side Generation) zależy od twoich konkretnych potrzeb i wymagań projektu. Oto kilka kwestii, które pomogą ci zdecydować, które podejście jest bardziej odpowiednie:

Static Generation (SG):

Używaj SG, gdy treść jest statyczna lub zmienia się rzadko.
SG jest najlepszy do stron lub widoków, które nie wymagają częstych odświeżeń.
Idealne do treści, które można wygenerować podczas budowania projektu i dostarczyć jako statyczze pliki HTML.

Server-Side Generation (SSG):

Używaj SSG, gdy treść jest dynamiczna i wymaga częstego odświeżania na podstawie danych z bazy danych, API lub innych źródeł.
SSG jest przydatny, gdy potrzebujesz generować treść na żądanie, ale nadal chcesz korzystać z zalet generacji na poziomie serwera (np. SEO, optymalizacja wydajności).
Pozwala na dostosowanie treści w zależności od parametrów żądania (np. personalizacja dla użytkownika).
Przykłady zastosowań:

Jeśli masz stronę internetową z listą artykułów, z którymi rzadko coś się dzieje (np. raz na kilka godzin), Static Generation jest odpowiednią opcją.
Jeśli tworzysz stronę e-commerce z listą produktów, które zmieniają się dynamicznie w oparciu o dostępność i cenę, warto użyć Server-Side Generation.
Kiedy potrzebujesz stron o zawartości opartej na danych użytkownika, takie jak profil użytkownika, którego treść jest dostosowana do danego użytkownika, SSG jest odpowiednie.
Warto również pamiętać, że Next.js umożliwia mieszanie tych podejść w jednym projekcie. Możesz używać SG do statycznych stron i SSG do dynamicznych, a nawet generować niektóre strony dynamicznie na żądanie (Client-Side Rendering) za pomocą mechanizmu getServerSideProps lub getInitialProps.
