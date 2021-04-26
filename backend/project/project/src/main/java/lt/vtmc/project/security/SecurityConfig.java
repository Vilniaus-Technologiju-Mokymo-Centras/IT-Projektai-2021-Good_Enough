package lt.vtmc.project.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

import lt.vtmc.project.service.UserService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@Configuration
@EnableWebSecurity
@EnableGlobalMethodSecurity(securedEnabled = true, prePostEnabled = true)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserService userService;

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.cors().and().csrf().disable().authorizeRequests().antMatchers("**").permitAll().anyRequest().anonymous()
				.and().exceptionHandling().and().headers().frameOptions().sameOrigin();
	}

// pavyzdys is Springo skaidriu

//	@Autowired
//	private SecurityEntryPoint securityEntryPoint;
//http.authorizeRequests().antMatchers("/", "/Swagger-ui").permitAll().antMatchers("/api/**").authenticated()
//.and().formLogin().successHandler(new SimpleUrlAuthenticationSuccessHandler())
//.failureHandler(new SimpleUrlAuthenticationFailureHandler()).loginPage("/login").permitAll().and()
//.logout().permitAll().and().csrf().disable().exceptionHandling()
//.authenticationEntryPoint(securityEntryPoint).and().headers().frameOptions().disable()
//.successHandler(new AuthenticationSuccessHandler()) {
//@Override
//public void onAuthernticationSuccess(HttpServeRequest request, HttpServeResponse response, Authentication authentication) throws IOException, ServeException {
//response.setHeader("Access-Control-Allow-Credentials", "true");
//response.setHeader("Access-Control-Allow-Origin", request.getHeader("Origin"));
//response.getWriter().print("{"username\": \""+SecurityContextHolder.getContext().getAuthentication().getName+"\"}");
//};

	@Bean
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

	@Bean
	public DaoAuthenticationProvider authenticationProvider() {
		DaoAuthenticationProvider authenticationProvider = new DaoAuthenticationProvider();

		authenticationProvider.setUserDetailsService(userDetailsService());
		authenticationProvider.setPasswordEncoder(passwordEncoder());

		return authenticationProvider;
	}

	@Autowired
	public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userService).passwordEncoder(passwordEncoder());
	}

}
