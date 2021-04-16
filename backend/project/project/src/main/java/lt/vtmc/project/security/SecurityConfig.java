//package lt.vtmc.project.security;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;
//import org.springframework.security.web.authentication.SimpleUrlAuthenticationSuccessHandler;
//
//@Configuration
//@EnableWebSecurity
//@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
//public class SecurityConfig extends WebSecurityConfigurerAdapter {
//
//	@Autowired
//	private SecurityEntryPoint securityEntryPoint;
//
//	@Override
//	protected void configure(HttpSecurity http) throws Exception {
//		http.authorizeRequests().antMatchers("/", "/Swagger-ui").permitAll().antMatchers("/api/**").authenticated()
//				.and().formLogin().successHandler(new SimpleUrlAuthenticationSuccessHandler())
//				.failureHandler(new SimpleUrlAuthenticationFailureHandler()).loginPage("/login").permitAll().and()
//				.logout().and().csrf().disable().exceptionHandling().authenticationEntryPoint(securityEntryPoint).and()
//				.headers().frameOptions().disable();
//	}
//}
