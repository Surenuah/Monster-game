<template>
  <div>
    <h2>Welcome to the game zone!</h2>
    <div class="main-wrap">
      <div>
        <h4>Levi</h4>
        <health-bar-component :currentHP="playerHP > 0? playerHP : 0"/>
      </div>

      <div class="buttons-wrap">
        <template v-if="gameActive">
          <ButtonCompnent buttonText="Attack"
                          @click.native="attackHandler"/>
          <ButtonCompnent buttonText="Heal"
                          buttonColor="yellow"
                          @click.native="healHandler"/>
          <ButtonCompnent buttonText="Critical Attack"
                          @click.native="criticalAttackHandler"/>
        </template>
        <template v-else>
          <h3 v-if="winGame">
            U win!
          </h3>
          <h3 v-else>
            U lost!
          </h3>
          <ButtonCompnent buttonText="Restart game"
                          buttonColor="blue"
                          @click.native="restartGame"/>
        </template>

      </div>
      <div>
        <h4>Zik</h4>
        <health-bar-component :currentHP="enemyHP > 0 ? enemyHP : 0"/>
      </div>

    </div>
    <h3>
      {{lastAction}}
    </h3>

  <ModalComponent v-if="showModal"
                  :mainText="
                  winGame? 'U win! Congratulation!!!' : 'Sorry, but u r looser!'"
                  buttonText="Play again"
                  @restartGameModal="restartGame"
                  @closeModal="showModal = false"
  />
  </div>
</template>

<script>
import HealthBarComponent from "@/Views/MonsterGame/HealthBarComponent";
import ButtonCompnent from "@/components/ButtonCompnent";
import ModalComponent from "@/components/ModalComponents";

export default {
  name: "MonsterGame",
  components: {
    HealthBarComponent,
    ButtonCompnent,
    ModalComponent
  },
  data:() => ({
    playerHP: 100,
    enemyHP: 100,
    lastAction: 'asdasd',
    gameActive: true,
    winGame: false,
    showModal: false
  }),
  methods: {
    attackHandler() {
      let a = Math.floor(0.000005);
      console.log(a);
      this.lastAction = 'attacked'
      this.enemyHP -= 20;
      if (this.checkEnemyHP()) {
        this.gameActive = false;
        this.winGame = true
        this.showModal = true
      } else {
        this.playerHP -= 30;
        if (this.checkPlayerHP())
        {
          this.gameActive = false;
          this.winGame = false
          this.showModal = true
        }
      }

    },
    healHandler() {
      this.lastAction = 'healed'
    },
    criticalAttackHandler() {
      this.enemyHP -= 40;
      if (this.checkEnemyHP()) {
        this.gameActive = false;
        this.winGame = true
        this.showModal = true
      } else {
        this.playerHP -= 30;
        if (this.checkPlayerHP())
        {
          this.gameActive = false;
          this.winGame = false
          this.showModal = true
        }
      }

    },
    checkEnemyHP() {
      return this.enemyHP <= 0
    },
    checkPlayerHP() {
      return this.playerHP <= 0;
    },
    restartGame() {
      this.gameActive = true;
      this.playerHP = 100;
      this.enemyHP = 100;
      this.showModal= false
    }
  }
}
</script>

<style scoped>
.main-wrap {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin: 20px;
}
.buttons-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>