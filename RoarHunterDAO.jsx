// RoarHunterDAO.jsx
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FaTwitter, FaDiscord, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

export default function RoarHunterDAO() {
  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-black py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold tracking-widest text-green-400 drop-shadow-lg"
        >
          ROAR HUNTER DAO
        </motion.h1>
        <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
          Unleashing the power of the jungle through decentralized governance.
        </p>
        <div className="mt-8">
          <ConnectButton />
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 px-6 bg-green-950">
        <h2 className="text-3xl font-bold text-green-300 mb-6 text-center">About Roar Hunter</h2>
        <p className="max-w-3xl mx-auto text-gray-300 text-center">
          Roar Hunter is a DAO-powered ecosystem where the spirit of the jungle guides governance, utility, and innovation. Join the tribe and shape the roar.
        </p>
      </section>

      {/* Tokenomics */}
      <section className="py-16 px-6 bg-black">
        <h2 className="text-3xl font-bold text-green-300 mb-6 text-center">Tokenomics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <Card className="bg-green-900">
            <CardContent className="p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Total Supply</h3>
              <p>1,000,000,000 ROAR</p>
            </CardContent>
          </Card>
          <Card className="bg-green-900">
            <CardContent className="p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Community</h3>
              <p>60% - Earned by members</p>
            </CardContent>
          </Card>
          <Card className="bg-green-900">
            <CardContent className="p-6 text-white">
              <h3 className="font-bold text-xl mb-2">Treasury</h3>
              <p>20% - For DAO initiatives</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Roadmap */}
      <section className="py-16 px-6 bg-green-950">
        <h2 className="text-3xl font-bold text-green-300 mb-10 text-center">Roadmap</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-white">
          <div>
            <h4 className="text-xl font-semibold">Q3 2025</h4>
            <p>Launch DAO, Token Airdrop, Community Onboarding</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q4 2025</h4>
            <p>Jungle NFT drop, Staking goes live</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Q1 2026</h4>
            <p>DAO Governance, Partner Expansion</p>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-6 bg-green-950">
        <h2 className="text-3xl font-bold text-green-300 mb-6 text-center">Meet the Hunters</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {["Alpha", "Shadow", "Fang"].map((name) => (
            <Card key={name} className="bg-green-800">
              <CardContent className="p-4 text-white text-center">
                <div className="w-20 h-20 mx-auto bg-green-600 rounded-full mb-4" />
                <h4 className="text-lg font-semibold">{name}</h4>
                <p className="text-sm text-gray-300">Core Member</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-6 bg-black text-center">
        <p className="mb-4 text-gray-400">Follow the Roar</p>
        <div className="flex justify-center space-x-6 text-green-300">
          <a href="#"><FaTwitter size={24} /></a>
          <a href="#"><FaDiscord size={24} /></a>
          <a href="#"><FaGithub size={24} /></a>
        </div>
        <p className="mt-6 text-sm text-gray-500">© 2025 Roar Hunter DAO. All rights reserved.</p>
      </footer>
    </div>
  );
}
