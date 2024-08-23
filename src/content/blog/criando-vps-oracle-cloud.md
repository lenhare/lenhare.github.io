---
author: Renan Lenhare
pubDatetime: 2024-08-23T07:11:00Z
modDatetime: 2024-08-23T07:11:00Z
title: Criando um Virtual Private Server na Oracle Cloud
slug: criando-vps-oracle-cloud
featured: false
draft: false
tags:
  - tutorial
description: Criando um Virtual Private Server na Oracle Cloud.
---

- [Pré-requisitos](#pré-requisitos)
- [Criando uma Conta na Oracle Cloud](#criando-uma-conta-na-oracle-cloud)
- [Acessando o Painel da Oracle Cloud](#acessando-o-painel-da-oracle-cloud)
- [Criando um Compartimento (Compartment)](#criando-um-compartimento-compartment)
- [Criando uma Rede Virtual (VCN)](#criando-uma-rede-virtual-vcn)
- [Criando o Virtual Private Server (VPS)](#criando-o-virtual-private-server-vps)
- [Configurando o Acesso SSH](#configurando-o-acesso-ssh)
- [Próximos Tutoriais](#próximos-tutoriais)

### Pré-requisitos

- Uma conta na [Oracle Cloud](https://cloud.oracle.com/) (veja a seção "Criando uma Conta" se você ainda não tem uma).
- Um cliente SSH (recomendo clientes como [Termius](https://termius.com/download/windows) ou [Putty](https://www.putty.org/)) para acessar o VPS.

### Criando uma Conta na Oracle Cloud

1. Acesse o site [Oracle Cloud](https://cloud.oracle.com/).
2. Clique em **Sign Up for Free**.
3. Preencha o formulário com suas informações pessoais e escolha a opção de **Always Free**.
4. Confirme seu e-mail e complete o processo de cadastro.

### Acessando o Painel da Oracle Cloud

1. Faça login na [Oracle Cloud Console](https://cloud.oracle.com/).
2. Após o login, você será direcionado ao **Oracle Cloud Console**, onde poderá gerenciar todos os seus recursos.

### Criando um Compartimento (Compartment)

1. No menu lateral, vá até **Identidade e Segurança** e clique em **Compartimentos**.
2. Clique em **Criar Compartimento**.
3. Dê um nome ao compartimento, como `meu_compartimento`, e clique em **Criar Compartimento**.

### Criando uma Rede Virtual (VCN)

1. No menu lateral, vá até **Rede** e clique em **Redes virtuais na nuvem**.
2. Clique em **Criar VCN**.
3. Dê um nome à VCN, como `minha_vcn`.
4. Selecione o compartimento que você criou anteriormente.
5. Marque a opção **Crie Recursos Relacionados ao Virtual Cloud Network Plus** para criar as sub-redes e gateway de internet automaticamente.
6. Clique em **Criar VCN**.

### Criando o Virtual Private Server (VPS)

1. No menu lateral, vá até **Computação** e clique em **Instâncias**.
2. Clique em **Criar Instância**.
3. Dê um nome à instância, como `meu_vps`.
4. No campo **Compartimento**, selecione o compartimento que você criou.
5. Em **Posicionamento**, selecione a região desejada.
6. Em **Imagem e forma**, clique em _Alterar Imagem_ e selecione _Ubuntu_, Canonical Ubuntu 22.04 (_Always Free Elegível_), escolha também um tipo de máquina, como o **VM.Standard.E2.1.Micro** (que está no plano gratuito).

   **_Nota_**: No plano **_Always Free_**, você pode criar uma instância com 4 OCPUs e 24 GB de memória, todas as tenancies recebem as primeiras 3.000 horas de OCPU e 18.000 horas GB por mês gratuitas para instâncias de VM usando o VM.Standard.A1. Flex [shape](https://docs.oracle.com/iaas/Content/Compute/References/computeshapes.htm), que tem um [processador Arm](https://docs.oracle.com/iaas/Content/Compute/References/arm.htm).

7. Em **Informações da VNIC Principal**, selecione a VCN que você criou e a sub-rede correspondente.
8. Em **Adicionar chaves SSH**, insira a chave pública que você utilizará para acessar o VPS.

   **_Nota_**: Se você estiver usando o cliente Putty, você pode criar a própria chave pública e a chave privada, utilizando o Putty Key Generator (PuTTYgen) e usá-la em "Colar chaves públicas" (guarde bem as chaves para não perder o acesso SSH).

9. Clique em **Criar** para iniciar a criação da instância.

### Configurando o Acesso SSH

1. Após a instância ser criada, vá até a seção **Endereço IP Público** e anote o IP público.
2. Abra seu cliente SSH e conecte-se à instância usando o comando abaixo (substitua `user` pelo nome de usuário padrão, como `opc`, e `IP_ADDRESS` pelo IP público da instância):

   ```bash
   ssh user@IP_ADDRESS
   ```

3. Pronto! Agora você está conectado ao seu VPS na Oracle Cloud.

### Próximos Tutoriais

1. Nos próximos tutoriais, vou mostrar como criar e configurar um servidor Apache/NGINX, nessa VPS que acabamos de criar.

Para mais informações e opções avançadas, consulte a documentação oficial da [Oracle Cloud](https://docs.oracle.com/en-us/iaas/Content/home.htm).
