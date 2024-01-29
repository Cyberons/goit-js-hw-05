const profile = {
  username: "Jacob",
  playTime: 300,
// Методи changeUsername та updatePlayTime можуть бути викликані безпосередньо на об'єкті profile, оскільки вони є його методами.
  changeUsername(newName) {
    this.username = newName;
  },

  updatePlayTime(hours) {
    this.playTime += hours;
  },
// Метод getInfo повертає рядок, який містить ім'я користувача та кількість активних годин.
  getInfo() {
      return `${this.username} has ${this.playTime} active hours!`;
// Виклик методу getInfo безпосередньо після зміни імені користувача або оновлення кількості активних годин показує, що методи працюють коректно.
  },
};

console.log(profile.getInfo()); // "Jacob has 300 active hours!"

profile.changeUsername("Marco");
console.log(profile.getInfo()); // "Marco has 300 active hours!"

profile.updatePlayTime(20);
console.log(profile.getInfo()); // "Marco has 320 active hours!"