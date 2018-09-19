import {BaseComponent} from '@/base/base-component';
import {Component} from 'vue-property-decorator';
import {mixins} from 'vue-class-component';

@Component
export class BasePageComponent extends mixins(BaseComponent) {
  public pageTitle: string = 'Unknown page';

  mounted() {
    console.log(this.$store);
  }
}
